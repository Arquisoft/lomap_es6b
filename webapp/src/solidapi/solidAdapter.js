import PlaceEntity from "../entities/PlaceEntity";
import { writeData, findDataInContainer} from "./solidapi";
import * as solid from "@inrupt/solid-client";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
export function savePlace(session, placeEntity) {
    let place = placeEntity;
    const { v4: uuidv4 } = require('uuid');
    place.id = uuidv4();//actualmente se guarda en los pods, con un id aleatorio
    if (session.info.webId == null) {
        return null;
    } 

   

    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");//https://username.inrupt.net
    let PlacesUrl = basicUrl.concat("/public", "/Places", "/" + place.id + ".json");//ruta donde queremos guardar el lugar


    place = JSON.parse(JSON.stringify(place))
    //añadimos las caracteristicas de jsonld
    place["@context"] = "https://schema.org/";
    place["@type"] = "Place";



    let blob = new Blob([JSON.stringify(place)],{ type: "application/ld+json" });
    let file = new File([blob], place.id + ".jsonld", { type: blob.type });


    //le paso el file creado con el blob
    writeData(session,PlacesUrl,file);
    return place;
}

export async function getPlaces(session){
    if (session.info.webId == null) {
        return null;
    } // Check if the webId is undefined

    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");
    let pointsUrl = basicUrl.concat("/public", "/Places/");

    let places = [];
    let files = await findDataInContainer(session, pointsUrl);
    let file;
    if (files != null) {
        for (const element of files) {
            file = element;
            let text = await file.text();
            places.push(JSON.parse(text));
        }
    }
    return places;
}

export async function getFriends(webId){
    let myDataset = await solid.getSolidDataset(webId); // obtain the dataset from the URI
    let theThing = await solid.getThing(myDataset, webId);
    let friendsURL = solid.getUrlAll(theThing, FOAF.knows);

    let friends = [];

    for(let i in friendsURL){
        myDataset = await solid.getSolidDataset(friendsURL[i]); // obtain the dataset from the URI
        theThing = await solid.getThing(myDataset, friendsURL[i]);
        let name = solid.getStringNoLocale(theThing, FOAF.name);
        let friend = {
            friendURL:friendsURL[i],
            friendName:name,
            profilePicture:VCARD.hasPhoto.iri.value,
        }
        console.log(friend.profilePicture);
        friends.push(friend);
    }
    return friends;
}

