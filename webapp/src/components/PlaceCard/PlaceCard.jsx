import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DeletePlaceConfirmDialog from "../DeletePlaceConfirmDialog/DeletePlaceConfirmDialog";
import {deletePlaceMarkByID} from "../../api/api";
const PlaceCard = (props) => {
    const {place, setSelectedPlaceMyPlaces, deletePlace} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeletePlace = () => {
        console.log(place.id);
        deletePlaceMarkByID(place._id); //deleting in the database
        deletePlace(place._id); //deleting in the frontend
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