import React, {useState} from 'react';
import {Button, FormControl, MenuItem, Select, Alert, Snackbar} from "@mui/material";
import TextField from "@mui/material/TextField";
import useStyles from "./styles";
import PlaceEntity from "../../entities/PlaceEntity";
import { savePlace } from '../../solidapi/solidAdapter';
import {v4 as uuidv4} from "uuid";

function AddPlaceSidebar (props)  {
    const { selectedPoint, places, setPlaces,userWebId, session} = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    // const [privacy, setPrivacy] =  useState("");
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const placeCategories = [ //repetición de código, pero necesario para que placeCategories no se inicie como undefined :(
        {title: 'Bar'},
        {title: 'Restaurant'},
        {title: 'Shop'},
        {title: 'Supermarket'},
        {title: 'Hotel'},
        {title: 'Cinema'},
        {title: 'Academic Institution'},
        {title: 'Public Institution'},
        {title: 'Sports Club'},
        {title: 'Museum'},
        {title: 'Park'},
        {title: 'Landscape'},
        {title: 'Monument'},
        {title: 'Hospital'},
        {title: 'Police Station'},
        {title: 'Transport Center'},
        {title: 'Entertainment'},
        {title: 'Other'}
    ];
    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const addPlace =  async(req) => {
        const place = new PlaceEntity();
        place.name = name;
        place.description = description;
        place.latitude = selectedPoint.lat;
        place.longitude = selectedPoint.lng;
        place.category = category;
        // place.privacy = privacy;
        place.textComments = [];
        place.imageComments = [];
        place.ratingComments = [];
        const { v4: uuidv4 } = require('uuid');
        place.id = uuidv4();//actualmente se guarda en los pods, con un id aleatorio

        //Con una webId como esta "https://aliciafp15.inrupt.net/profile/card#me";
        const parts = userWebId.split('.'); // Dividimos la cadena en partes utilizando el punto como separador
        const webId = parts[0].split('//')[1]; // Obtenemos la segunda parte después de '//'
        place.webId = webId;//acotamos para guardar solo el nombre de usuario
        console.log( webId);

        //guarda el Place en los pods con todos los datos
        savePlace(session,place,userWebId);


        setPlaces([...places, place]);

        handleSnackbarOpen(); //abrir el snackbar

    }


    const classes = useStyles();

    function isFormComplete(){
        return name !== "" && description !== ""  && category !== "" ;
    }

    function clearForm(){
        setName("");
        setDescription("");
        setCategory("");
        // setPrivacy("");
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
                    id='input-name'
                    className = {classes.textField}
                    value={name}
                    label="Place Name"
                    required
                    onChange={(e) => setName(e.target.value)}></TextField>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    className = {classes.textField}
                    value={description}
                    id='input-description'
                    label="Place Description"
                    multiline
                    rows={4}
                    required
                    onChange={(e) => setDescription(e.target.value)}></TextField>
            </FormControl>
            <FormControl className={classes.formControl}>

                <Select
                    title="Place Category"
                    className={classes.textField}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id='select-categories'
                >
                    {placeCategories.map(category =>
                        <MenuItem key={category.title} id={category.title} title={category.title} value={category.title} role="option">{category.title}</MenuItem>
                    )}
                </Select>

                {/*<Select*/}
                {/*    className = {classes.textField}*/}
                {/*    value = {privacy}*/}
                {/*    onChange={(e)=>setPrivacy(e.target.value)}>*/}
                {/*    <MenuItem value="Public">Share place with my friends</MenuItem>*/}
                {/*    <MenuItem value="Private">Store place privately</MenuItem>*/}

                {/*</Select>*/}
            </FormControl>
            <FormControl className={classes.formControl}>

            <Button className = {classes.textField}
                    id='add-place-button'
                        title={'Add Place Button'}
                        type='submit'
                        variant="contained"
                        onClick={addPlaceAndClearForm}
                        disabled={!isFormComplete()}>
                    Add place
                </Button>

            </FormControl>
            <Snackbar id='addplace-success' open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    Place added successfully!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AddPlaceSidebar;