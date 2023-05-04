import React, {useState} from 'react';
import {savePlace} from "../../solidapi/solidAdapter";
import {
    Alert,
    Button,
    FormControl,
    InputLabel,
    MenuItem, Rating,
    Select, Snackbar
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
import RatingCommentCard from "../CommentCards/RatingCommentCard/RatingCommentCard";

const CommentsSidebar = (props) => {
    const classes = {
        button: {
            margin: '25px',
            marginBottom: '25px',
            marginTop: '5px',
            variant:"outlined",
            width: '100%',
        },
    };

    const {session, userWebId,  place} = props;
    const [openTextDialog, setOpenTextDialog] = React.useState(false);
    const [commentValue, setCommentValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [ratingValue, setRatingValue] = useState(-1);
    const [selectedCommentType, setSelectedCommentType] = useState('text');
    const [openImageDialog, setOpenImageDialog] = React.useState(false);
    const [openRatingDialog, setOpenRatingDialog] = React.useState(false);
    const [snackbarOpenCT, setSnackbarOpenCT] = useState(false);
    const [snackbarOpenI, setSnackbarOpenI] = useState(false);
    const [snackbarOpenR, setSnackbarOpenR] = useState(false);

    const handleClickOpen = (value) => {
        if(value === "Add a text comment") handleClickOpenTextDialog();
        if(value === "Add an image") handleClickOpenImageDialog();
        if(value === "Add a rating") handleClickOpenRatingDialog();
    };
    const handleSnackbarOpenCT =() => {
        setSnackbarOpenCT(true);
    }
    const handleSnackbarCloseCT =() => {
        setSnackbarOpenCT(false);
    }
    const handleSnackbarOpenI =() => {
        setSnackbarOpenI(true);
    }
    const handleSnackbarCloseI =() => {
        setSnackbarOpenI(false);
    }
    const handleSnackbarOpenR =() => {
        setSnackbarOpenR(true);
    }
    const handleSnackbarCloseR =() => {
        setSnackbarOpenR(false);
    }
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

    const handleClickOpenRatingDialog = () => {
        setOpenRatingDialog(true);
    };

    const handleCloseRatingDialog = () => {
        setOpenRatingDialog(false);
    };

    const showTextComments = () => {
        if (props.showTextCommentsMock) props.showTextCommentsMock(); //TESTING
        return place?.textComments?.map((comment) => (<TextCommentCard key={place.id} comment={comment}/>));
    };

    const showImageComments = () => {
        return place.imageComments?.map((image) => (<ImageCommentCard key={place.id} image={image}/>));
    };

    const showRatingComments = () => {
        return place.ratingComments?.map((rating) => (<RatingCommentCard key={place.id} rating={rating}/>));
    };

    const handleAddTextComment = () => {
        if (props.handleAddTextCommentMock) props.handleAddTextCommentMock(); //TESTING
        place.textComments.push({posterWebId: userWebId, text: commentValue});
        savePlace(session, place, userWebId);
        handleCloseTextDialog();
        setCommentValue("");
        handleSnackbarOpenCT();
    }

    const handleAddImageComment = () => {
        place.imageComments.push({posterWebId: userWebId, text: imageValue});
        savePlace(session, place,userWebId);
        handleCloseImageDialog();
        setImageValue("");
        handleSnackbarOpenI();
    }
    const handleAddRatingComment = () => {
        place.ratingComments.push({posterWebId: userWebId, value: ratingValue});
        savePlace(session, place,userWebId);
        handleCloseRatingDialog();
        setRatingValue(-1);
        handleSnackbarOpenR();
    }


    const showData = () => {
        if(selectedCommentType === "text") return showTextComments();
        else if(selectedCommentType === "image") return showImageComments();
        else if(selectedCommentType === "rating") return showRatingComments();
        else return null;
    }

    const handleCommentTypeChange = (value) => {
        if (props.showRatingCommentsMock) props.showRatingCommentsMock(); //TESTING
        setSelectedCommentType(value);
    }

      
    return (
        <>
        <div style={{ height: '100%', marginLeft: '25px', marginRight: '25px', marginBottom: '5px', textAlign: 'center', display:'flex', flexDirection: 'column', gap: '25px'}}>
            <div>
                <AddCommentButton  handleClickOpen={handleClickOpen} style={classes.button}
                 />
            </div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" data-testid= "commentSidebarLabelShowing" >Showing</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="showing-comments"
                    value={selectedCommentType}
                    label="Type of comments to show"
                    data-testid= "botonShowing"
                >
                    <MenuItem onClick={()=>handleCommentTypeChange("text")} value={"text"}>Text comments</MenuItem>
                    <MenuItem id='rating-option' data-testid='rating-item' onClick={()=>handleCommentTypeChange("rating")} value={"rating"}>Ratings</MenuItem>
                    <MenuItem id='images-option' onClick={()=>handleCommentTypeChange("image")} value={"image"}>Images</MenuItem>
                </Select>
            </FormControl>
        </div>
        <Dialog  open={openTextDialog} onClose={handleCloseTextDialog}>
            <DialogTitle data-testid='tituloDialogo' style={{marginBottom: '-10px'}}>Add a text comment</DialogTitle>
            <DialogContent >
                <DialogContentText style={{marginBottom: '12px'}}>
                    It will be posted on the place page.
                </DialogContentText>
                <TextField style={{minWidth: '450px'}}
                    autoFocus
                    data-testid='escribeComentario'
                    id="input-comments"
                    label="Write your comment here"
                    multiline
                    rows={3}
                    fullWidth
                   value={commentValue} // bind TextField value to commentValue state
                   onChange={(e) => setCommentValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button data-testid='cancelaMensaje' onClick={handleCloseTextDialog}>Cancel</Button>
                <Button data-testid='addMensaje' id='confirm-add-comment' onClick={handleAddTextComment}>Add</Button>
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
                           id="image-textfield"
                           label="Paste your image URL here"
                           fullWidth
                           value={imageValue} // bind TextField value to commentValue state
                           onChange={(e) => setImageValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseImageDialog}>Cancel</Button>
                <Button id="confirm-image-dialog" onClick={handleAddImageComment}>Add</Button>
            </DialogActions>
        </Dialog>

        <Dialog  open={openRatingDialog} onClose={handleCloseRatingDialog}>
            <DialogTitle style={{marginBottom: '-10px'}}>Add a rating</DialogTitle>
            <DialogContent >
                <DialogContentText style={{marginBottom: '12px'}}>
                    It will be posted on the place page.
                </DialogContentText>
                <Rating
                    name="simple-controlled"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseRatingDialog}>Cancel</Button>
                <Button data-testid='ratingCommentsButton' id="confirm-add-review" onClick={handleAddRatingComment}>Add</Button>
            </DialogActions>
        </Dialog>

        {showData()}
            <Snackbar open={snackbarOpenCT} autoHideDuration={3000} onClose={handleSnackbarCloseCT}>
                <Alert onClose={handleSnackbarCloseCT} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    Comment successfully added!
                </Alert>
            </Snackbar>
            <Snackbar open={snackbarOpenR} autoHideDuration={3000} onClose={handleSnackbarCloseR}>
                <Alert onClose={handleSnackbarCloseR} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    Rating successfully added!
                </Alert>
            </Snackbar>
        </>
    );

}
export default CommentsSidebar;