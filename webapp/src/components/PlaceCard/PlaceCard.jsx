import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DeletePlaceConfirmDialog from "../DeletePlaceConfirmDialog/DeletePlaceConfirmDialog";
import {deletePlaceMarkByID} from "../../api/api";
import { removePlace } from '../../solidapi/solidAdapter';

const PlaceCard = (props) => {
    const {place, setSelectedPlaceMyPlaces, deletePlace, session} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeletePlace = async(req) => {
        console.log(place.id);
        
        console.log("El id que buscará en el pod es: " + place.id) //correcto, asi lo tenemos guardado en los pods por ahora
        //no se si los guiones que separan en el log, y en la web de los pods no aparecen, afectan
        removePlace(session,place.id)//TODO delete from the pods
        deletePlaceMarkByID(place._id); //deleting in the database
        deletePlace(place.id); //deleting in the frontend PROBLEMA: ME BORRA TODA LA LISTA
    }


    return (
        <div>
            <Card style={{margin: '25px', marginTop:'0px'}}>
                <CardHeader
                    component='div' style={{paddingBottom: '10px'}}
                    action={
                        <>
                            <IconButton aria-label="view" onClick={()=>setSelectedPlaceMyPlaces({lat: place.latitude, lng: place.longitude})}>
                                <TravelExploreRoundedIcon style={{color: '#6986e8'}}/>
                            </IconButton>
                            <IconButton aria-label="menu" onClick={handleClickOpen}>
                                <DeleteRoundedIcon style={{color: '#dc6868'}} />
                            </IconButton>

                        </>
                    }
                    title={<Typography variant="h5" style={{fontWeight: "bold"}}>{place.name}</Typography>}
                    subheader={<Typography variant="h6" color="textSecondary">{place.category}</Typography>}
                />
                <CardContent component="div" style={{paddingTop: '0px'}} >
                    <Typography variant="body2" component="p">
                        {place.description}
                    </Typography>
                </CardContent>
            </Card>
            <DeletePlaceConfirmDialog open={open} handleClose={handleClose} handleDeletePlace={handleDeletePlace}/>
        </div>
    );
};

export default PlaceCard;