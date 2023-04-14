import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MapIcon from '@mui/icons-material/Map';
import Avatar from "@mui/material/Avatar";
import {CombinedDataProvider, Image} from "@inrupt/solid-ui-react";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import {useStyles} from "tss-react/mui";
import DeleteFriendConfirmDialog from "../DeleteFriendConfirmDialog/DeleteFriendConfirmDialog";
import { deleteFriendPod } from '../../solidapi/solidAdapter';

const FriendCard = (props) => {
    const classes = useStyles();
    const {friend, setSelectedFriend, setSelectedButton, userWebId} = props;
    const [open, setOpen] = React.useState(false);

    const friendUrl = friend.friendURL;
    const parts = friendUrl.split("/");
    const part = parts[2].split(".")[0];
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

    return (
        <div>
            <CombinedDataProvider datasetUrl={friendUrl} thingUrl={friendUrl}>
                <Card style={{margin: '25px', marginTop:'0px'}}>
                    <CardHeader
                        component='div' style={{paddingBottom: '10px'}}
                        avatar={
                            <Avatar className={classes.avatarImage}
                                    alt="Friend image profile">
                                    <Image property={VCARD.hasPhoto.iri.value}  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}/>
                            </Avatar>
                        }
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
                            {part}
                        </Typography>
                    </CardContent>
                </Card>
                <DeleteFriendConfirmDialog open={open} handleClose={handleClose} handleDeleteFriend={handleDeleteFriend}/>
            </CombinedDataProvider>
        </div>
    );
};

export default FriendCard;