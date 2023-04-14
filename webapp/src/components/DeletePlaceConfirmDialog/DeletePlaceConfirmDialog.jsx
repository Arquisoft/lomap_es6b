import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


const DeletePlaceConfirmDialog = (props) => {
    const {open, handleClose, handleDeletePlace} = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle >
                    Delete Place
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This place will be deleted from your list. Are you sure you want to continue?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{color:'red'}} onClick={handleDeletePlace}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeletePlaceConfirmDialog;