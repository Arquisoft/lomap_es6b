import React, {useState} from 'react';
import {Button, FormControl, MenuItem, Select, Alert, Snackbar} from "@mui/material";
import TextField from "@mui/material/TextField";
import { savePlace } from '../../solidapi/solidAdapter';

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
        if(props.handleClickOpenMock) props.handleClickOpenMock(); //TESTING
        const { v4: uuidv4 } = require('uuid');
        const parts = userWebId.split('.'); // Dividimos la cadena en partes utilizando el punto como separador
        const webId = parts[0].split('//')[1]; // Obtenemos la segunda parte después de '//'
        const place = {id: uuidv4(), webId: webId, name: name, description: description, latitude: selectedPoint.lat, longitude: selectedPoint.lng, category: category, textComments: [], imageComments: [], ratingComments: []};
        savePlace(session,place,userWebId);        //guarda el Place en los pods con todos los datos
        setPlaces([...places, place]);
        handleSnackbarOpen(); //abrir el snackbar
    }

    function isFormComplete(){
        return name !== "" && description !== ""  && category !== "" ;
    }

    function clearForm(){
        setName(""); setDescription(""); setCategory("");
    }

    function addPlaceAndClearForm() {
        if (props.handleClickOpenMock) props.handleClickOpenMock(); //TESTING
        if (selectedPoint.lat != null && selectedPoint.lng != null)
            addPlace().then(() => {clearForm();}).catch((error) => {console.error("An error occurred while creating place:", error);});
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