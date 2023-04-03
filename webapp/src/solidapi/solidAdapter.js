import PlaceEntity from "../entities/PlaceEntity";
import { writeData, findDataInContainer} from "./solidapi";

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

