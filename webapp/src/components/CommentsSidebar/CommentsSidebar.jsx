import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {savePlace} from "../../solidapi/solidAdapter";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import AddCommentButton from "./AddCommentButton/AddCommentButton";
import TextCommentCard from "../CommentCards/TextCommentCard/TextCommentCard";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import ImageCommentCard from "../CommentCards/ImageCommentCard/ImageCommentCard";

const CommentsSidebar = (props) => {
    const classes = useStyles();

    // const classes = useStyles();
    const {session, userWebId,  place} = props;
    const [openTextDialog, setOpenTextDialog] = React.useState(false);
    const [commentValue, setCommentValue] = useState('');
    const [imageValue, setImageValue] = useState('');

    const [selectedCommentType, setSelectedCommentType] = useState('text');
    const [openImageDialog, setOpenImageDialog] = React.useState(false);
    const handleClickOpen = (value) => {
        console.log(value);
        if(value === "Add a text comment"){
            handleClickOpenTextDialog();
        }
        if(value === "Add an image"){
            handleClickOpenImageDialog();
        }

    };

    const handleClickOpenTextDialog = () => {
        setOpenTextDialog(true);
    };

    const handleCloseTextDialog = () => {
        setOpenTextDialog(false);
    };

    const handleClickOpenImageDialog = () => {
        setOpenImageDialog(true);
    };

    const handleCloseImageDialog = () => {
        setOpenImageDialog(false);
    };

    const showTextComments = () => {
        console.log(place.textComments);
        console.log("PLACE:")
        console.log(place)
        return place.textComments?.map((comment) => (
            <TextCommentCard key={place.id} comment={comment}/>
        ));
    };

    const showImageComments = () => {
        console.log(place.imageComments);
        console.log("PLACE:")
        console.log(place)
        return place.imageComments?.map((imageURL) => (
            <ImageCommentCard key={place.id} imageURL={imageURL}/>
        ));
    };

    const handleAddTextComment = () => {
        console.log(place.textComments)
        place.textComments.push({posterWebId: userWebId, text: commentValue});
        console.log(place.textComments)
        savePlace(session, place);
        handleCloseTextDialog();
        setCommentValue("");
    }

    const handleAddImageComment = () => {
        console.log(place.imageComments)
        place.imageComments.push({posterWebId: userWebId, text: imageValue});
        console.log(place.imageComments)
        savePlace(session, place);
        handleCloseImageDialog();
        setCommentValue("");
    }

    const showData = () => {
        if(selectedCommentType === "text"){
            return showTextComments();
        }
        else if(selectedCommentType === "image"){
            return showImageComments();
        }
        else return null;
    }

    const handleCommentTypeChange = (value) => {
        setSelectedCommentType(value);
    }
    return (
        <>
        <div style={{ height: '100%', marginLeft: '25px', marginRight: '25px', marginBottom: '5px', textAlign: 'center', display:'flex', flexDirection: 'column', gap: '25px'}}>
            <div>
                <AddCommentButton handleClickOpen={handleClickOpen} className={classes.button} style={{width: '100%'}} />
            </div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Showing</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCommentType}
                    label="Type of comments to show"
                >
                    <MenuItem onClick={()=>handleCommentTypeChange("text")} value={"text"}>Text comments</MenuItem>
                    <MenuItem onClick={()=>handleCommentTypeChange("review")} value={"review"}>Reviews</MenuItem>
                    <MenuItem onClick={()=>handleCommentTypeChange("image")} value={"image"}>Images</MenuItem>
                </Select>
            </FormControl>
        </div>
        <Dialog  open={openTextDialog} onClose={handleCloseTextDialog}>
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
                <Button onClick={handleCloseTextDialog}>Cancel</Button>
                <Button onClick={handleAddTextComment}>Add</Button>
            </DialogActions>
        </Dialog>

        <Dialog  open={openImageDialog} onClose={handleCloseImageDialog}>
            <DialogTitle style={{marginBottom: '-10px'}}>Add an image comment</DialogTitle>
            <DialogContent >
                <DialogContentText style={{marginBottom: '12px'}}>
                    It will be posted on the place page.
                </DialogContentText>
                <TextField style={{minWidth: '450px'}}
                           autoFocus
                           id="outlined-multiline-static"
                           label="Paste your image URL here"
                           fullWidth
                           value={imageValue} // bind TextField value to commentValue state
                           onChange={(e) => setImageValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseImageDialog}>Cancel</Button>
                <Button onClick={handleAddImageComment}>Add</Button>
            </DialogActions>
        </Dialog>

        {showData()}
        </>
    );

}
export default CommentsSidebar;