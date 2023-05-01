import { writeData, findDataInContainer, deleteData} from "./solidapi";
import * as solid from "@inrupt/solid-client";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {
    createAclFromFallbackAcl,
    getResourceAcl, getSolidDatasetWithAcl,
    hasAccessibleAcl,
    hasFallbackAcl,
    hasResourceAcl, saveAclFor
} from "@inrupt/solid-client";

export function savePlace(session, placeEntity) {
    let place = placeEntity;

    if (session.info.webId == null) {
        return null;
    }
    let basicUrl = session.info.webId?.split("/").slice(0, 3).join("/");//https://username.inrupt.net


    let privacyOfPlace = place.privacy;
    console.log(privacyOfPlace);
    let PlacesUrl = basicUrl.concat("/private", "/Places", "/" + place.id + ".json");


    place = JSON.parse(JSON.stringify(place))
    //añadimos las caracteristicas de jsonld
    place["@context"] = "https://schema.org/";
    place["@type"] = "Place";


    let blob = new Blob([JSON.stringify(place)],{ type: "application/ld+json" });
    let file = new File([blob], place.id + ".jsonld", { type: blob.type });

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

//Función que borra un amigo de solid
export async function deleteFriendPod(userWebId, session,friendWebId) {
    let profile = userWebId.split("#")[0];
    let dataSet = await solid.getSolidDataset(profile);

    let dataSetThing = solid.getThing(dataSet, userWebId);

    try {
        let friendName = solid.getStringNoLocale(await getProfile(userWebId), FOAF.name);
        let existsFriend = solid.getUrlAll(dataSetThing, FOAF.knows)

        if (!existsFriend.some((url) => url === friendWebId)){
            console.log("Este usuario no es amigo");
        }else if(typeof friendName === 'undefined'){
            console.log("Este usuario no existe");
        }else{
            let newFriend = solid.buildThing(dataSetThing)
                .removeUrl(FOAF.knows, friendWebId)
                .build();
            dataSet = solid.setThing(dataSet, newFriend);
            dataSet = await solid.saveSolidDatasetAt(userWebId, dataSet, {fetch: session.fetch})
            console.log(friendName+" borrado de amigos");
        }
    } catch (error){
        console.log(error);
    }
}


//Función que da permiso sobre un punto a todos los amigos
export async function giveAllFriendPermissionPoint(webId,session, placeID) {

    let myDataset = await solid.getSolidDataset(webId); // obtain the dataset from the URI
    let theThing = await solid.getThing(myDataset, webId);
    let friendsURL = solid.getUrlAll(theThing, FOAF.knows); //array de amigos
    console.log(friendsURL);
    let name =extractNameFromUrl(webId);
    console.log("name corto :"+name)
    try {
        for(let i in friendsURL){
            console.log(i);
            giveFriendPermissionFolder(webId,session,name);
             const myDatasetWithAcl = await getSolidDatasetWithAcl( "https://"+name +".inrupt.net/private/Places/"+placeID+".json", {
            fetch: session.fetch
            });

            let resourceAcl;
            if (!hasResourceAcl(myDatasetWithAcl)) {
                if (!hasAccessibleAcl(myDatasetWithAcl)) {
                    console.log(
                        "The current user does not have permission to change access rights to this Resource."
                    );
                }
                if (!hasFallbackAcl(myDatasetWithAcl)) {
                    console.log(
                        "The current user does not have permission to see who currently has access to this Resource."
                    );
                }
                resourceAcl = createAclFromFallbackAcl(myDatasetWithAcl);
            } else {
                resourceAcl = getResourceAcl(myDatasetWithAcl);
            }
            const updatedAcl = solid.setAgentResourceAccess( //se establecen los permisos
                resourceAcl,
                friendsURL[i],
                { read: true, append: true , write: true, control: false }
            );

            await saveAclFor(myDatasetWithAcl, updatedAcl, { fetch: session.fetch }); //se guardan en cada amigo los cambios
            console.log("Permisos al amigo :"+ friendsURL[i]);
        }

    } catch (error) {
        console.log(error);
    }
}

//Función que otorga permisos a los amigos para la carpeta places, y asi poder monstrar los sitios que se compartieron.
export async function giveFriendPermissionFolder(webId,session, friendUrl, userName) {
    try {
        console.log("permisos carpeta");
        const myDatasetWithAcl = await getSolidDatasetWithAcl( "https://"+userName +".inrupt.net/private/Places/.acl", {
            fetch: session.fetch
        });
        let resourceAcl;
        if (!hasResourceAcl(myDatasetWithAcl)) {
            if (!hasAccessibleAcl(myDatasetWithAcl)) {
                console.log(
                    "The current user does not have permission to change access rights to this Resource."
                );
            }
            if (!hasFallbackAcl(myDatasetWithAcl)) {
                console.log(
                    "The current user does not have permission to see who currently has access to this Resource."
                );
            }
            resourceAcl = createAclFromFallbackAcl(myDatasetWithAcl);
        } else {
            resourceAcl = getResourceAcl(myDatasetWithAcl);
        }
        const updatedAcl = solid.setAgentResourceAccess( //se establecen los permisos
            resourceAcl,
            friendUrl,
            { read: true, append: true, write: false, control: false }
        );

        await saveAclFor(myDatasetWithAcl, updatedAcl, { fetch: session.fetch }); //se guardan en cada amigo los cambios
        console.log("Permisos al amigo carpeta:"+ friendUrl +"   de la carpeta Places.");
        // }

    } catch (error) {
        console.log(error);
    }
}

export function extractNameFromUrl(url) {
    let start = url.indexOf("//") + 2;
    let end = url.indexOf(".", start);
    return url.substring(start, end);
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


