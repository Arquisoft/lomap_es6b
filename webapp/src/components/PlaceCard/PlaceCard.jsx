import React, {useEffect, useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
    Chip,
    Alert,
    Snackbar
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import DeletePlaceConfirmDialog from "../DeletePlaceConfirmDialog/DeletePlaceConfirmDialog";
import {
    giveAllFriendPermissionPoint,
    removePlace,
    getFriends
} from '../../solidapi/solidAdapter';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShareIcon from '@mui/icons-material/Share';

const PlaceCard = (props) => {
    const {place, setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton, setSelectedPlaceComment, setSelectedButton,
            userWebId, showShareButton} = props;
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarOpenShare, setSnackbarOpenShare] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const [friends, setFriends] = React.useState([]);

    useEffect(async () => {
        if (userWebId) {
            await getFriends(userWebId).then((friends) => {
                setFriends(friends);
                console.log("hola");
            });
        }
    }, []);

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

    const handleClickShareButton = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseShareButton = () => {
        setAnchorEl(null);
    };

    const handleSnackbarOpenShare = () => {
        setSnackbarOpenShare(true);
    };

    const handleSnackbarCloseShare = () => {
        setSnackbarOpenShare(false);
    };

    const handleDeletePlace = async () => {
        console.log(place.id);
        //no sé si los guiones que separan en el log, y en la web de los pods no aparecen, afectan
        await removePlace(session, place.id)// delete from the pods

        deletePlace(place.id); //deleting in the frontend
        handleClose();//cerrar la pestaña de diálogo
        handleSnackbarOpen(); //abrir el snackbar
    }

    const handleSharePlaceWithAllFriends = async () => {
        console.log("Boton compartir con todos mis amigos");
        await giveAllFriendPermissionPoint(userWebId, session, place.id);
        handleSnackbarOpenShare();
    };


    return (
        <div>
            <Card style={{margin: '25px', marginTop:'0px'}}>
                <CardHeader
                    component='div' style={{paddingBottom: '10px'}}
                    action={
                        <>
                            {/*<Chip icon = {place.privacy === "Public" ? <Diversity3Icon/> : <PermIdentityIcon/>} label={place.privacy}  />*/}
                            <IconButton id={place.name+"-comments"} aria-label="view" onClick={()=>{setSelectedPlaceComment(place); setSelectedButton('Comments');}}>
                                <ForumRoundedIcon style={{color: '#ffb941'}}/>
                            </IconButton>
                            {/*Menu compartir sitio con amigos*/}
                            {showShareButton ? (
                                <IconButton
                                    aria-label="share"
                                    onClick={handleClickShareButton}
                                    startIcon={<ShareIcon/> }>
                                    <ShareIcon style={{color: '#573105'}} />
                                </IconButton>
                            ): null }

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseShareButton}

                            >
                                <MenuItem onClick={async () => await handleSharePlaceWithAllFriends}>Share with my friends</MenuItem>

                            </Menu>
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
                    Place successfully removed!
                </Alert>
            </Snackbar>

            <DeletePlaceConfirmDialog open={open} handleClose={handleClose} handleDeletePlace={handleDeletePlace}/>
            <Snackbar open={snackbarOpenShare} autoHideDuration={3000} onClose={handleSnackbarCloseShare}>
                <Alert onClose={handleSnackbarCloseShare} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    Place successfully shared!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default PlaceCard;