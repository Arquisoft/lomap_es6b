import React, {useState} from 'react';
import {Button, FormControl, MenuItem, Select, Alert, Snackbar} from "@mui/material";
import TextField from "@mui/material/TextField";
import PlaceEntity from "../../entities/PlaceEntity";
import { savePlace } from '../../solidapi/solidAdapter';
import {v4 as uuidv4} from "uuid";

function AddPlaceSidebar (props)  {
    const classes = {
        formControl: {
            width: '100%',
            height: '100%',
        },
        textField: {
            margin: '25px',
            marginBottom: '5px',
            marginTop: '5px',
            variant:"outlined",
        },
        title: {
            margin: '25px',
            color: '#313439',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            fontSize: '2rem',
        },

    };
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
        //////TESTING////////////
        if(props.handleClickOpenMock){
            props.handleClickOpenMock();
        }
        //////////////////
        const place = new PlaceEntity();
        place.name = name;
        place.description = description;
        place.latitude = selectedPoint.lat;
        place.longitude = selectedPoint.lng;
        place.category = category;
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


    function isFormComplete(){
        return name !== "" && description !== ""  && category !== "" ;
    }

    function clearForm(){
        setName("");
        setDescription("");
        setCategory("");
        // setPrivacy("");
    }

    function addPlaceAndClearForm() {
        //////TESTING////////////
        if (props.handleClickOpenMock) {
            props.handleClickOpenMock();
        }
        //////////////////
        if (selectedPoint.lat != null && selectedPoint.lng != null) {
            addPlace().then(() => {
                console.log("Sharing place with all friends completed successfully.");
                clearForm();
            })
                .catch((error) => {
                    console.error("An error occurred while sharing place with all friends:", error);
                });

        }
    }

    return (
        <div>

            <FormControl style={classes.formControl}>
                <TextField
                    id='input-name'
                    data-testid='placeName'
                    style = {classes.textField}
                    value={name}
                    label="Place Name"
                    required
                    onChange={(e) => setName(e.target.value)}></TextField>
            </FormControl>
            <FormControl style={classes.formControl}>
                <TextField
                    style = {classes.textField}
                    value={description}
                    id='input-description'
                    data-testid = 'placeDescription'
                    label="Place Description"
                    multiline
                    rows={4}
                    required
                    onChange={(e) => setDescription(e.target.value)}></TextField>
            </FormControl>
            <FormControl style={classes.formControl}>

                <Select
                    //native={true}//POR DEFECTO ESTÁ A FALSE, E IMPIDE MOSTRAR OPCIONES EN LOS TEST
                    title="Place Category"
                    style={classes.textField}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    id='select-categories'
                    data-testid = 'placeCategory'
                    name='botonCategoria'
                >
                    {placeCategories.map(category =>
                        <MenuItem key={category.title} id={category.title} title={category.title} value={category.title} role="option">{category.title}</MenuItem>
                    )}
                </Select>
            </FormControl>

            <FormControl style={classes.formControl}>

            <Button style = {classes.textField}
                    id='add-place-button'
                    data-testid = 'addPlaceButton'
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