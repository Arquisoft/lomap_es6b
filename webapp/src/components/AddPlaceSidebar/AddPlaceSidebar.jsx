import React, {useState} from 'react';
import {Button, FormControl, MenuItem, Select, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import useStyles from "./styles";
import { v4 as uuid } from 'uuid';
import PlaceEntity from "../../entities/PlaceEntity";
const AddPlaceSidebar = (props) => {
    const {places, setPlaces} = props;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [category, setCategory] = useState("");
    const classes = useStyles();
    function isFormComplete(){
        return name !== "" && description !== "" && latitude !== "" && longitude !== "" && category !== "";
    }

    function clearForm(){
        setName("");
        setDescription("");
        setLatitude("");
        setLongitude("");
        setCategory("");
    }

    function addPlaceAndClearForm(){
        addPlace();
        clearForm();
    }

    function addPlace(){
        const place = new PlaceEntity();
        place.id = uuid();
        place.name = name;
        place.description = description;
        place.latitude = latitude;
        place.longitude = longitude;
        place.category = category;
        setPlaces([...places, place]);

    }

    return (
        <div>
            <Typography className={classes.title} variant="h4">Create a new place.</Typography>
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
                <TextField
                    className = {classes.textField}
                    value={longitude}
                    id="outlined-required"
                    label="Longitude"
                    required
                    onChange={(e) => setLongitude(e.target.value)}
                />
                <TextField
                    className = {classes.textField}
                    value={latitude}
                    id="outlined-required"
                    label="Latitude"
                    required
                    onChange={(e) => setLatitude(e.target.value)}
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