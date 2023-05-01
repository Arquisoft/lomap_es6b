import { writeData, findDataInContainer, deleteData} from "./solidapi";
import * as solid from "@inrupt/solid-client";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";

export function savePlace(session, placeEntity) {
    let place = placeEntity;

    if (session.info.webId == null) {
        return null;
    }
    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");//https://username.inrupt.net


    let privacyOfPlace = place.privacy;
    console.log(privacyOfPlace);
    let PlacesUrl = basicUrl.concat("/private", "/Places", "/" + place.id + ".json");
    //
    // let PlacesUrlPublic ="";

    // if(privacyOfPlace === "Public"){
    //     PlacesUrlPublic = basicUrl.concat("/public", "/Places", "/" + place.id + ".json");
    //     PlacesUrl = basicUrl.concat("/private", "/Places", "/" + place.id + ".json");
    // }else if(privacyOfPlace === "Private") {
    //     PlacesUrl = basicUrl.concat("/private", "/Places", "/" + place.id + ".json");
    // }


    place = JSON.parse(JSON.stringify(place))
    //añadimos las caracteristicas de jsonld
    place["@context"] = "https://schema.org/";
    place["@type"] = "Place";



    let blob = new Blob([JSON.stringify(place)],{ type: "application/ld+json" });
    let file = new File([blob], place.id + ".jsonld", { type: blob.type });


    //le paso el file creado con el blob
    // if(privacyOfPlace === "Public") { //si es publico se guarda en la carpeta de contenido privado y en la de público
    //     writeData(session,PlacesUrl,file);
    //     writeData(session,PlacesUrlPublic,file);
    //
    // }else {
    writeData(session,PlacesUrl,file);

    //}
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
        const placeUrl = basicUrl.concat("/private", "/Places", "/" + placeToDelete.id + ".json");

        // if (placeToDelete.privacy === "Public") {
        //     deleteData(session, placeUrl);
        //     const placeUrlPublic = basicUrl.concat("/public", "/Places", "/" + placeToDelete.id + ".json");
        //     deleteData(session, placeUrlPublic);
        // }else {
        //     deleteData(session, placeUrl);
        // }
        deleteData(session, placeUrl);
    }
}

export function modifyPlace(session, placeId, updatedPlaceEntity) {
    const basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");
    const placeUrlPublic = basicUrl.concat("/private", "/Places", "/" + placeId + ".json");

    const updatedPlace = JSON.parse(JSON.stringify(updatedPlaceEntity));
    updatedPlace["@context"] = "https://schema.org/";
    updatedPlace["@type"] = "Place";

    const blob = new Blob([JSON.stringify(updatedPlace)],{ type: "application/ld+json" });
    const file = new File([blob], placeId + ".jsonld", { type: blob.type });

    return writeData(session, placeUrlPublic, file);
}

export async function getPlacesByWebId(session, webId){
    if (webId == null) {
        return null;
    } // Check if the webId is undefined

    let basicUrl = webId?.split("/").slice(0, 3).join("/");
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

export async function getFriendsImage(webId) {
    if (webId == null) {
        return null;
    } // Check if the webId is undefined
    let basicUrl = webId?.split("/").slice(0, 3).join("/");
    let pictureUrl = basicUrl.concat("/profile", "/card/","photo/");

    return pictureUrl;
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
            // profilePicture:VCARD.hasPhoto.iri.value,
       }

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
//Función que da permiso a un amigo sobre un sitio
export async function giveFriendPermissionPoint(webId,session, placeId, friendUrl) {

    let friendsURL = solid.getUrlAll(await getProfile(webId), FOAF.knows); //array de amigos del usuario

    let url = urlPlaceUser(webId,placeId); //url del archivo a dar permisos


    try { //obtener el archivo de control de acceso para la cuenta de usuario
        let file = await solid.getFile(
            url,
            { fetch: session.fetch }
        );

        //recorremos el array de amigos para encontrar el amigo con el que queremos compartir el sitio
        for(let friend in friendsURL) {
            if(friend === friendUrl) {
                let resourceAcl = solid.createAcl(file); //recurso de permisos

                const updatedAcl = solid.setAgentResourceAccess( //se establecen los permisos
                    resourceAcl,
                    friendsURL[friend],
                    { read: true, append: false, write: true, control: false }
                );
                await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch }); //se guardan en el amigo los cambios
                console.log("Permisos al amigo :"+ friendsURL);
            }

        }

    } catch (error) {
        console.log(error);
    }
}

//Funcion que da permiso sobre un punto a todos los amigos
export async function giveAllFriendPermissionPoint(webId,session, placeId) {

    let friendsURL = solid.getUrlAll(await getProfile(webId), FOAF.knows);

    let url = urlPlaceUser(webId,placeId); //url del archivo a dar permisos

    try { //obtener el archivo de control de acceso para la cuenta de usuario
        let file = await solid.getFile(
            url,
            { fetch: session.fetch }
        );

        //recorremos el array de amigos para compartir el sitio con todos los amigos
        for(let friend in friendsURL){ //para cada amigo
            let resourceAcl = solid.createAcl(file); //se crea un objeto de control de acceso

            const updatedAcl = solid.setAgentResourceAccess( //se establecen los permisos
                resourceAcl,
                friendsURL[friend],
                { read: true, append: false, write: true, control: false }
            );

            await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch }); //se guardan en cada amigo los cambios
            console.log("Permisos al amigo :"+ friendsURL);
        }

    } catch (error) {
        console.log(error);
    }
}



export async function getProfile(webId){
    let profileDocumentURI = webId.split("#")[0]; // we remove the right hand side of the # for consistency
    let myDataset = await solid.getSolidDataset(profileDocumentURI); // obtain the dataset from the URI
    return solid.getThing(myDataset, webId); // we obtain the thing we are looking for from the dataset
}

//Devuelve la url para poder acceder al json.ld
export function urlPlaceUser(webId, placeId){
    let url = webId.replace("profile/card#me","");
    url = url+"private/" + placeId +".json";
    return url;
}


