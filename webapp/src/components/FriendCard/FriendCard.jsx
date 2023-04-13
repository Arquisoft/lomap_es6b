import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MapIcon from '@mui/icons-material/Map';
import Avatar from "@mui/material/Avatar";
import {Image} from "@inrupt/solid-ui-react";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import {useStyles} from "tss-react/mui";
import DeleteFriendConfirmDialog from "../DeleteFriendConfirmDialog/DeleteFriendConfirmDialog";
import { deleteFriendPod } from '../../solidapi/solidAdapter';

const FriendCard = (props) => {
    const classes = useStyles();
    const {friend, setSelectedFriend, setSelectedButton, deleteFriend, userWebId} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteFriend = () => {
        console.log("DELETING FRIEND...");
        deleteFriendPod(userWebId, "https://uo282249.inrupt.net/profile/card#me"); //deleting in the frontend

    }

    console.log(friend.profilePicture);
    return (
        <div>
            <Card style={{margin: '25px', marginTop:'0px'}}>
                <CardHeader
                    component='div' style={{paddingBottom: '10px'}}
                    action={
                        <>
                            <IconButton aria-label="view" onClick={() => {setSelectedFriend(friend); setSelectedButton('Friend');}}>
                                <MapIcon style={{color: '#6986e8'}} />
                            </IconButton>
                            <IconButton aria-label="menu" onClick={handleClickOpen}>
                                <DeleteRoundedIcon style={{color: '#dc6868'}} />
                            </IconButton>

                        </>
                    }
                    title={<Typography variant="h5" style={{fontWeight: "bold"}}>{friend.friendName}</Typography>}
                    // subheader={<Typography variant="h6" color="textSecondary">{place.category}</Typography>}
                />
                <CardContent component="div" style={{paddingTop: '0px'}} >
                    <Typography variant="body2" component="p">
                        {/*{place.description}*/}
                        {friend.friendURL}
                    </Typography>
                </CardContent>
            </Card>
            <DeleteFriendConfirmDialog open={open} handleClose={handleClose} handleDeleteFriend={handleDeleteFriend}/>
        </div>
    );
};

export default FriendCard;