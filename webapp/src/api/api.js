//import {PlaceMark} from '../shared/sharedTypes'; //CAMBIAR EL CONTENIDO

export async function addPlaceMark(placeMark){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':placeMark.name, 'description':placeMark.description, 
                            'latitude':placeMark.latitude, 'longitude':placeMark.longitude, 
                            'description':placeMark.description, 'category':placeMark.category}) 
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getPlaceMarks(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/placeMarks/getAll');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}