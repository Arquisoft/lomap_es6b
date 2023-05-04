import React from 'react';
import {Alert, Card, CardHeader, IconButton, Snackbar, Typography} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MapIcon from '@mui/icons-material/Map';
import Avatar from "@mui/material/Avatar";
import {CombinedDataProvider, Image} from "@inrupt/solid-ui-react";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import DeleteFriendConfirmDialog from "../DeleteFriendConfirmDialog/DeleteFriendConfirmDialog";
import { deleteFriendPod } from '../../solidapi/solidAdapter';

const FriendCard = (props) => {
    const {friend, setSelectedFriend, setSelectedButton, userWebId, session} = props;
    const [open, setOpen] = React.useState(false);
    const [openSnackBar,setOpenSnackBar] = React.useState(false);

    const friendUrl = friend.friendURL;
    const parts = friendUrl.split("/");
    const part = parts[2].split(".")[0];
    const handleClickOpen = () => {
        if (props.handleClickOpenMock) props.handleClickOpenMock();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSnackBarOpen = () => {
        setOpenSnackBar(true);
    }

    const handleSnackBarClose = () => {
        setOpenSnackBar(false);
    }

    const handleDeleteFriend = async () => {
        await deleteFriendPod(userWebId, session, friend.friendURL);
        handleClose();
        handleSnackBarOpen();
    }

    return (
        <div>
            <CombinedDataProvider datasetUrl={friendUrl} thingUrl={friendUrl}>
                <Card data-testid={friend.friendURL} style={{margin: '25px', marginTop:'0px'}}>
                    <CardHeader
                        component='div' style={{paddingBottom: '10px'}}
                        avatar={
                            <Avatar style={{width: "65px",
                                height: "65px",
                                margin: 'auto',
                                marginBottom:'10px'}}
                                    alt="Friend image profile">
                                    <Image property={VCARD.hasPhoto.iri.value} style={{maxHeight: '65px'}}/>
                            </Avatar>
                        }
                        action={
                            <>
                                <IconButton data-testid="map-button" aria-label="view" onClick={() => {setSelectedFriend(friend); setSelectedButton('Friend');}}>
                                    <MapIcon style={{color: '#6986e8'}} />
                                </IconButton>
                                <IconButton data-testid="delete-friend" aria-label="menu" onClick={handleClickOpen}>
                                    <DeleteRoundedIcon style={{color: '#dc6868'}} />
                                </IconButton>
                            </>
                        }
                        title={<Typography variant="h5" style={{fontWeight: "bold"}}>{friend.friendName}</Typography>}
                        subheader={<Typography variant="h6" color="textSecondary">{part}</Typography>}
                    />
                </Card>
                <DeleteFriendConfirmDialog open={open} handleClose={handleClose} handleDeleteFriend={handleDeleteFriend}/>
                <Snackbar id='deleteFriend-success' open={openSnackBar} autoHideDuration={3000} onClose={handleSnackBarClose}>
                    <Alert onClose={handleSnackBarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                        Friend deleted successfully!
                    </Alert>
                </Snackbar>
            </CombinedDataProvider>
        </div>
    );
};

export default FriendCard;