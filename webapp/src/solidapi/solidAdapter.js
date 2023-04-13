import PlaceEntity from "../entities/PlaceEntity";

import { writeData, findDataInContainer, deleteData} from "./solidapi";
import * as solid from "@inrupt/solid-client";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {
    getSolidDataset,
    saveSolidDatasetAt,
    removeUrlFromThing,
    getThing,
    getUrlAll,
    setThing
} from '@inrupt/solid-client';

export function savePlace(session, placeEntity) {
    let place = placeEntity;
    const { v4: uuidv4 } = require('uuid');
    place.id = uuidv4();//actualmente se guarda en los pods, con un id aleatorio
    if (session.info.webId == null) {
        return null;
    } 
    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");//https://username.inrupt.net


    let privacyOfPlace = place.privacy;
    console.log(privacyOfPlace);
    let PlacesUrl ="";
    let PlacesUrlPublic ="";

    if(privacyOfPlace === "Public"){
        PlacesUrlPublic = basicUrl.concat("/public", "/Places", "/" + place.id + ".json");
        PlacesUrl = basicUrl.concat("/private", "/Places", "/" + place.id + ".json");
    }else if(privacyOfPlace === "Private") {
        PlacesUrl = basicUrl.concat("/private", "/Places", "/" + place.id + ".json");
    }


    place = JSON.parse(JSON.stringify(place))
    //añadimos las caracteristicas de jsonld
    place["@context"] = "https://schema.org/";
    place["@type"] = "Place";



    let blob = new Blob([JSON.stringify(place)],{ type: "application/ld+json" });
    let file = new File([blob], place.id + ".jsonld", { type: blob.type });


    //le paso el file creado con el blob
    if(privacyOfPlace === "Public") { //si es publico se guarda en la carpeta de contenido privado y en la de público
        writeData(session,PlacesUrl,file);
        writeData(session,PlacesUrlPublic,file);

    }else {
        writeData(session,PlacesUrl,file);

    }
    return place;
}

export async function getPlaces(session){
    if (session.info.webId == null) {
        return null;
    } // Check if the webId is undefined

    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");
    let pointsUrl = basicUrl.concat("/private", "/Places/");

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

export async function removePlace(session,placeId){
    //por hacer
    // Obtenemos la lista de lugares existentes
    const places = await getPlaces(session);

    // Buscamos el lugar que queremos eliminar
    const placeToDelete = places.find(place => place.id === placeId);

    // Si el lugar existe, eliminamos su archivo
    if (placeToDelete) {
        const basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");
        const placeUrl = basicUrl.concat("/public", "/Places", "/" + placeToDelete.id + ".json");
        deleteData(session, placeUrl);
    }
}
    
export async function getPlacesByWebId(session, webId){
    if (webId == null) {
        return null;
    } // Check if the webId is undefined

    let basicUrl = webId?.split("/").slice(0, 3).join("/");
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

export async function deleteFriendPod(userWebId, friendwebID) {
    //Obtenemos la lista de amigos
    const friends = await getFriends(userWebId);

    //Buscamos el amigo que queremos borrar
    const friendToDelete = friends.find(friend => friend.friendURL === friendwebID);

    // Si el amigo existe, lo eliminamos
    if (friendToDelete) {
        const updatedFriends = friends.filter(friend => friend.friendURL !== friendwebID);

        // Actualizamos el documento de amigos
        const myDataset = await solid.getSolidDataset(userWebId); //obtenemos el dataset de la URI
        const theThing = await solid.getThing(myDataset, userWebId);
        const friendsList = solid.getUrlAll(theThing, FOAF.knows);
        let updatedList = friendsList.filter(friend => friend !== friendwebID);
        await solid.removeUrl(myDataset, FOAF.knows, friendwebID);
        await solid.saveSolidDatasetAt(userWebId, myDataset);
    }
}


