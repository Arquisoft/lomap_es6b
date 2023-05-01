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
    giveFriendPermissionPoint,
    getFriends
} from '../../solidapi/solidAdapter';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShareIcon from '@mui/icons-material/Share';
import SharePlacesDialog from "../SharePlacesDialog/SharePlacesDialog";

const PlaceCard = (props) => {
    const {place, setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton, setSelectedPlaceComment, setSelectedButton,
            userWebId} = props;
    const [open, setOpen] = React.useState(false);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElNested, setAnchorElNested] = React.useState(null);
    const [openShareFriend, setOpenShareFriend] = React.useState(false);

    const [friends, setFriends] = React.useState([]);

    useEffect(() => {
        getFriends(userWebId).then((friends) => {
            setFriends(friends);
            console.log("hola");
        });
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

    const handleShareOneFriendButton = () => {
        //setAnchorElNested(event.currentTarget);
        setOpenShareFriend(true);
    };

    const  handleCloseShareOneFriendButton = () => {
       // setAnchorElNested(null);
        setOpenShareFriend(false);
    };


    const handleDeletePlace = () => {
        console.log(place.id);

        console.log("El id que buscará en el pod es: " + place.id) //correcto, asi lo tenemos guardado en los pods por ahora
        //no sé si los guiones que separan en el log, y en la web de los pods no aparecen, afectan
        removePlace(session,place.id)// delete from the pods

        deletePlace(place.id); //deleting in the frontend
        handleClose();//cerrar la pestaña de diálogo
        handleSnackbarOpen(); //abrir el snackbar
    }

    const handleSharePlaceWithAllFriends = () => {
        console.log("Boton compartir con todos mis amigos");
        giveAllFriendPermissionPoint(userWebId, session,place.id);
    };

    const handleSharePlaceWithFriend = (event, index) => {
        console.log("Boton compartir con un amigo");
        giveFriendPermissionPoint(friends[index].id);
    }

    return (
        <div>
            <Card style={{margin: '25px', marginTop:'0px'}}>
                <CardHeader
                    component='div' style={{paddingBottom: '10px'}}
                    action={
                        <>
                            {/*<Chip icon = {place.privacy === "Public" ? <Diversity3Icon/> : <PermIdentityIcon/>} label={place.privacy}  />*/}
                            <IconButton aria-label="view" onClick={()=>{setSelectedPlaceComment(place); setSelectedButton('Comments');}}>
                                <ForumRoundedIcon style={{color: '#ffb941'}}/>
                            </IconButton>
                            {/*Menu compartir sitio con amigos*/}
                            <IconButton
                                aria-label="share"
                                onClick={handleClickShareButton}
                                startIcon={<ShareIcon/> }>
                                <ShareIcon style={{color: '#573105'}} />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseShareButton}

                            >
                                <MenuItem onClick={handleSharePlaceWithAllFriends}>Share with all my friends</MenuItem>
                                <MenuItem onClick={handleShareOneFriendButton}>Share with a friend of choice</MenuItem>
                                <MenuItem onClick={handleCloseShareButton}>Option 3</MenuItem>
                            </Menu>
{/*                            <Menu*/}
{/*                                id="nested-menu"*/}
{/*                                anchorEl={anchorElNested}*/}
{/*                                keepMounted*/}
{/*                                open={Boolean(anchorElNested)}*/}
{/*                                onClose={handleCloseShareOneFriendButton}*/}
{/*                                */}
{/*                                anchorOrigin={{*/}
{/*                                    vertical: 'top',*/}
{/*                                    horizontal: 'right',*/}
{/*                                }}*/}
{/*                                transformOrigin={{*/}
{/*                                    vertical: 'top',*/}
{/*                                    horizontal: 'left',*/}
{/*                                }}*/}
{/*                            >*/}
{/*                                */}
{/*/                                /!*{friends.map((friend, index) => (*!/*/}
{/*                                /!*    <MenuItem key={index} onClick={(event) => handleShareOneFriendButton(event, index)}>*!/*/}
{/*                                /!*        {friend}*!/*/}
{/*                                /!*    </MenuItem>*!/*/}
{/*                                /!*))}*!/*/}
{/*                            </Menu>*/}

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
            <SharePlacesDialog openShareFriend={openShareFriend}  handleCloseShareOneFriendButton={handleCloseShareOneFriendButton}
                               handleSharePlaceWithFriend={handleSharePlaceWithFriend} friends={friends}/>
        </div>
    );
};

export default PlaceCard;