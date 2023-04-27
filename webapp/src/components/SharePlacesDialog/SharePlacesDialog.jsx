import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem,
    ListItemButton, Avatar, ListItemAvatar, ListItemText} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import FriendCard from "../FriendCard/FriendCard";


const SharePlacesDialog = (props) => {
    const {openShareFriend,handleCloseShareOneFriendButton,handleSharePlaceWithFriend, friends} = props;

    const allFriends = ["adriana", "manuel", "alicia"];

    const showFriends = () => {
        console.log(friends);
        return friends?.map((friend) => (
            <ListItemButton key={friend.friendURL} friend={friend} onclick={handleSharePlaceWithFriend(friend.friendURL)}/>
        ));
    };

    return (
        <div>
            <Dialog
                open={openShareFriend}
                onClose={handleCloseShareOneFriendButton}
            >
                <DialogTitle >
                    Share place with friends
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select your friend.
                    </DialogContentText>
                </DialogContent>
                <List sx={{ pt: 0 }}>
                    {allFriends.map((friend) => (
                        <ListItem disableGutters>
                            <ListItemButton onClick={() => handleSharePlaceWithFriend(friend)} key={friend}>
                                <ListItemAvatar>
                                    <Avatar >
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={friend} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {/*<ListItem disableGutters>*/}
                    {/*    <ListItemButton*/}
                    {/*        autoFocus*/}
                    {/*        onClick={() => handleListItemClick('addAccount')}*/}
                    {/*    >*/}
                    {/*        <ListItemAvatar>*/}
                    {/*            <Avatar>*/}
                    {/*                <AddIcon />*/}
                    {/*            </Avatar>*/}
                    {/*        </ListItemAvatar>*/}
                    {/*        <ListItemText primary="Add account" />*/}
                    {/*    </ListItemButton>*/}
                    {/*</ListItem>*/}
                </List>


                <DialogActions>

                    <Button style={{color:'red'}} onClick={handleCloseShareOneFriendButton} >Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SharePlacesDialog;