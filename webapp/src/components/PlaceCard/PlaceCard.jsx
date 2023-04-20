import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Chip,
    Alert,
    Snackbar
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DeletePlaceConfirmDialog from "../DeletePlaceConfirmDialog/DeletePlaceConfirmDialog";
import {deletePlaceMarkByID} from "../../api/api";
import { removePlace } from '../../solidapi/solidAdapter';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
const PlaceCard = (props) => {
    const {place, setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton, setSelectedPlaceComment, setSelectedButton } = props;
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };


    const handleDeletePlace = () => {
        console.log(place.id);
        
        console.log("El id que buscará en el pod es: " + place.id) //correcto, asi lo tenemos guardado en los pods por ahora
        //no se si los guiones que separan en el log, y en la web de los pods no aparecen, afectan
        removePlace(session,place.id)//TODO delete from the pods
        deletePlaceMarkByID(place._id); //deleting in the database

        deletePlace(place.id); //deleting in the frontend
        handleClose();//cerrar la pestaña de dialogo
        handleSnackbarOpen(); //abrir el snackbar
    }


    return (
        <div>
            <Card style={{margin: '25px', marginTop:'0px'}}>
                <CardHeader
                    component='div' style={{paddingBottom: '10px'}}
                    action={
                        <>
                            <Chip icon = {place.privacy === "Public" ? <Diversity3Icon/> : <PermIdentityIcon/>} label={place.privacy}  />
                            <IconButton aria-label="view" onClick={()=>{setSelectedPlaceComment(place); setSelectedButton('Comments');}}>
                                <ForumRoundedIcon style={{color: '#ffb941'}}/>
                            </IconButton>
                            <IconButton aria-label="view" onClick={()=>setSelectedPlaceMyPlaces({lat: place.latitude, lng: place.longitude})}>
                                <TravelExploreRoundedIcon style={{color: '#6986e8'}}/>
                            </IconButton>
                            {showDeleteButton ? (
                                <IconButton aria-label="menu" onClick={handleClickOpen}>
                                    <DeleteRoundedIcon style={{color: '#dc6868'}} />
                                </IconButton>
                            ) : null}
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
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    ¡Place successfully removed!
                </Alert>
            </Snackbar>

            <DeletePlaceConfirmDialog open={open} handleClose={handleClose} handleDeletePlace={handleDeletePlace}/>
        </div>
    );
};

export default PlaceCard;