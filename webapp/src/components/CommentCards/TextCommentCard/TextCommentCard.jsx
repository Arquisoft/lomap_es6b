import React from 'react';
import {Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MapIcon from '@mui/icons-material/Map';
import Avatar from "@mui/material/Avatar";
import {CombinedDataProvider, Image, Text} from "@inrupt/solid-ui-react";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import {useStyles} from "tss-react/mui";

const TextCommentCard = (props) => {
    const classes = useStyles();
    const {key, comment} = props;
    const [open, setOpen] = React.useState(false);
    const posterWebId = comment.posterWebId;
    //const friendUrl = friend.friendURL;
    const parts = posterWebId.split("/");
    const part = parts[2].split(".")[0];
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const handleDeleteFriend = () => {
    //     console.log("DELETING FRIEND...");
    //     deleteFriendPod(userWebId, "https://uo282249.inrupt.net/profile/card#me"); //deleting in the frontend
    //
    // }

   // console.log(friend.profilePicture);
    return (
        <div>
            <CombinedDataProvider datasetUrl={posterWebId} thingUrl={posterWebId}>
                <Card style={{margin: '25px', marginTop:'0px'}}>
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
                        // action={
                        //     <>
                        //         <IconButton aria-label="menu" onClick={handleClickOpen}>
                        //             <DeleteRoundedIcon style={{color: '#dc6868'}} />
                        //         </IconButton>
                        //     </>
                        // }
                        title={<Typography variant="h5" style={{ fontSize: "16px"}}>
                            {comment.text}
                        </Typography>}
                        subheader={<Typography variant="h6" color="textSecondary" style={{fontSize: "16px"}}><Text property={VCARD.fn.iri.value} /> | {part}</Typography>}
                    />
                    {/*<CardContent component="div" style={{paddingTop: '0px'}} >*/}
                    {/*    <Typography variant="body2" component="p">*/}
                    {/*        /!*{place.description}*!/*/}

                    {/*    </Typography>*/}
                    {/*</CardContent>*/}
                </Card>
                {/*<DeleteFriendConfirmDialog open={open} handleClose={handleClose} handleDeleteFriend={handleDeleteFriend}/>*/}
            </CombinedDataProvider>
        </div>
    );
};

export default TextCommentCard;