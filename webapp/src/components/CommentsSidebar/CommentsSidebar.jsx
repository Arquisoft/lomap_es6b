import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard";
import {getComments, savePlace} from "../../solidapi/solidAdapter";
import FriendCard from "../FriendCard/FriendCard";
import {Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@mui/material";
import AddCommentButton from "./AddCommentButton/AddCommentButton";
import TextCommentCard from "../CommentCards/TextCommentCard/TextCommentCard";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

const CommentsSidebar = (props) => {
    const classes = useStyles();

    // const classes = useStyles();
    const {session, userWebId, setSelectedFriend,setSelectedButton, deleteFriend, place} = props;
    const [open, setOpen] = React.useState(false);
    const [commentValue, setCommentValue] = useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const showComments = () => {
        console.log(place.textComments);
        console.log("PLACE:")
        console.log(place)
        return place.textComments?.map((comment) => (
            <TextCommentCard key={place.id} comment={comment}/>
        ));
    };


    const handleAddTextComment = () => {
        console.log(place.textComments)
        place.textComments.push({posterWebId: userWebId, text: commentValue});
        console.log(place.textComments)
        savePlace(session, place);
        handleClose();
        setCommentValue("");
    }

    return (
        <>
        <div style={{width: '100%', height: '100%', textAlign:'center', marginBottom: '20px'}}>
            <AddCommentButton handleClickOpen={handleClickOpen} className={classes.button} />
        </div>
        <Dialog  open={open} onClose={handleClose}>
            <DialogTitle style={{marginBottom: '-10px'}}>Add a text comment</DialogTitle>
            <DialogContent >
                <DialogContentText style={{marginBottom: '12px'}}>
                    It will be posted on the place page.
                </DialogContentText>
                <TextField style={{minWidth: '450px'}}
                    autoFocus
                    id="outlined-multiline-static"
                    label="Write your comment here"
                    multiline
                    rows={3}
                    fullWidth
                   value={commentValue} // bind TextField value to commentValue state
                   onChange={(e) => setCommentValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddTextComment}>Add</Button>
            </DialogActions>
        </Dialog>
        {showComments()}
        </>
    );

}
export default CommentsSidebar;