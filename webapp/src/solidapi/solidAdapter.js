﻿import { writeData} from "./solidapi";

export function savePlace(session, placeEntity) {
    let place = placeEntity;
    const { v4: uuidv4 } = require('uuid');
    place.id = uuidv4();//actualmente se guarda en los pods, con un id aleatorio
    if (session.info.webId == null) {
        return null;
    } 
    console.log("la sesion: "+session);
    console.log("info webid: "+session.info.webId);


    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");//https://username.inrupt.net
    let PlacesUrl = basicUrl.concat("/public", "/Places", "/" + place.id + ".json");//ruta donde queremos guardar el lugar
    let blob = new Blob([JSON.stringify(place)], { type: "application/json" });
    let file = new File([blob], place.id + ".json", { type: "application/json" });
    writeData(session,PlacesUrl,file);
    return place;
}
