import React, {useState} from 'react';
import {Button, FormControl, MenuItem, Select, } from "@mui/material";
import TextField from "@mui/material/TextField";
import useStyles from "./styles";
import PlaceEntity from "../../entities/PlaceEntity";
import {addPlaceMark} from '../../api/api';
import { savePlace } from '../../solidapi/solidAdapter';

function AddPlaceSidebar (props)  {
    const { selectedPoint, places, setPlaces,userWebId, session} = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const addPlace =  async(req) => {
        const place = new PlaceEntity();
        place.name = name;
        place.description = description;
        place.latitude = selectedPoint.lat;
        place.longitude = selectedPoint.lng;
        place.category = category;

        //Con una webId como esta "https://aliciafp15.inrupt.net/profile/card#me";
        const parts = userWebId.split('.'); // Dividimos la cadena en partes utilizando el punto como separador
        const webId = parts[0].split('//')[1]; // Obtenemos la segunda parte después de '//'
        place.webId = webId;//acotamos para guardar solo el nombre de usuario
        console.log( webId);

        //GUARDA EL LUGAR EN LOS PODS!!
        savePlace(session,place);
        

        //result = await addPlaceMark({name, description,latitude,longitude, category});//metodo importado, le damos los parametros necesarios
        const result = await addPlaceMark(place);//metodo importado, le damos los parametros necesarios
        setPlaces([...places, place]);

        if(result){
            console.log("Añadiste un lugar con éxito");
            console.log("{userWebId}" + {userWebId});
            //notificar el cambio al componente padre
            //props.OnUserListChange();
        } else {
            console.log("Ha habido un error en el registro");
        }
    }

    const classes = useStyles();

    function isFormComplete(){
        return name !== "" && description !== ""  && category !== "";
    }

    function clearForm(){
        setName("");
        setDescription("");
        setCategory("");
    }

    function addPlaceAndClearForm(){
        if(selectedPoint.lat != null && selectedPoint.lng != null){
            addPlace();
            clearForm();
        }
    }
 
   

    return (
        <div>

            <FormControl className={classes.formControl}>
                <TextField
                    className = {classes.textField}
                    value={name}
                    id="outlined-required"
                    label="Place Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    className = {classes.textField}
                    value={description}
                    id="outlined-multiline-static"
                    label="Place Description"
                    multiline
                    rows={4}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Select
                    className = {classes.textField}
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}>
                    <MenuItem value="Restaurants">Restaurants</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attractions">Attractions</MenuItem>
                </Select>

                <Button className = {classes.textField} type='submit' variant="contained" onClick={addPlaceAndClearForm} disabled={!isFormComplete()}>Add place</Button>

            </FormControl>
        </div>
    );
};

export default AddPlaceSidebar;