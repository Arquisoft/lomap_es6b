import React, {useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteAllDataConfirmDialog from "../DeleteAllDataConfirmDialog/DeleteAllDataConfirmDialog";
import {Alert, Snackbar} from "@mui/material";
import {deleteAllPlaces} from "../../solidapi/solidAdapter";
const SettingsSideBar = (props) => {
    const classes = {
        deleteButton : {
            display: 'flex',
            color : "#faf5f3",
            fontSize: "20px",
            justifyContent: "center",
            backgroundColor: "#b95756",
            borderRadius: "6px",
            margin: '25px',
            marginBottom: '5px',
            marginTop: '5px',

            '&:hover': {
                backgroundColor: "#983c3a",
            }
        },



    };

    const {setPlaces,session} = props;
    const [open, setOpen] = React.useState(false);

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleSnackbarOpen = () => {
        if (props.handleSnackbarOpenMock) props.handleSnackbarOpenMock(); //TESTING
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleDeleteAll = async () => {
        setPlaces([]);
        handleClose();
        await deleteAllPlaces(session).then(() => {
            handleSnackbarOpen(); //abrimos el snackbar
        });
    };


    const handleClickOpen = () => {
        if (props.handleClickOpenMock) props.handleClickOpenMock(); //TESTING

        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Box>
                <nav aria-label="settings forders 2">
                    <List>
                        <ListItemButton id='deletealldata-button' data-testid='deletealldata-button' variant="contained" endicon={<DeleteIcon/>} style={classes.deleteButton}
                                        onClick={handleClickOpen}>
                            Delete all data
                        </ListItemButton>
                    </List>
                </nav>
            </Box>
            <DeleteAllDataConfirmDialog open={open} handleClose={handleClose} handleDeleteAll={handleDeleteAll}/>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} data-testid='snack'>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    All data removed successfully!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SettingsSideBar;