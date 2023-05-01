import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


const DeleteAllDataConfirmDialog = (props) => {
    const {open, handleClose, handleDeleteAll} = props;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle >
                    Delete all data
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        All your saved data in this app will be deleted. Are you sure you want to continue?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button id='confirm-deletealldata' style={{color:'red'}} onClick={handleDeleteAll}>Delete All Data</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteAllDataConfirmDialog;