﻿import PlaceEntity from "../entities/PlaceEntity";
import { writeData, findDataInContainer, deleteData} from "./solidapi";

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

