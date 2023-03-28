

export async function addPlaceMark(placeMark){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},

        body: JSON.stringify({name:placeMark.name, description:placeMark.description,
            latitude:placeMark.latitude, longitude:placeMark.longitude,
            category:placeMark.category,
            webId:placeMark.webId, placeID:placeMark.placeID
        })

    });
    return response.status===200;
}

export async function getPlaceMarks(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/getAll');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getPlaceMarksByUser(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/getPlaceMarksByUser');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function deletePlaceMarkByID(placeID){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/delete/byID/'+placeID,{
        method: 'DELETE',
    });
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function deleteAllPlaceMarks(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/delete/all',{
        method: 'DELETE',
    });
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}