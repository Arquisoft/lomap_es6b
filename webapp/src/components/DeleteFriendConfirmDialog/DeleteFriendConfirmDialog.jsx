import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


const DeleteFriendConfirmDialog = (props) => {
    const {open, handleClose, handleDeleteFriend} = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle >
                    Delete friend
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This friend will be deleted. Are you sure you want to continue?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{color:'red'}} onClick={handleDeleteFriend}>Delete Friend</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteFriendConfirmDialog;