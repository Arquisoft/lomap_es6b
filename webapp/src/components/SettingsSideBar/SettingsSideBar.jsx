import React, {useState} from 'react';
import useStyles from "./styles";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LockIcon from '@mui/icons-material/Lock';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DeleteAllDataConfirmDialog from "../DeleteAllDataConfirmDialog/DeleteAllDataConfirmDialog";
import {Alert, Snackbar} from "@mui/material";
import {deleteAllPlaces} from "../../solidapi/solidAdapter";
const SettingsSideBar = (props) => {
    const classes = useStyles();

    const {setPlaces,session} = props;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [open, setOpen] = React.useState(false);

    const [openAppearance, setOpenAppearance] = React.useState(false);
    const [openPrivacy, setOpenPrivacy] = React.useState(false);

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleSnackbarOpen = () => {
        if (props.handleSnackbarOpenMock) props.handleSnackbarOpenMock(); //TESTING
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleDeleteAll = () => {
        setPlaces([]);
        handleClose();
        handleSnackbarOpen(); //abrimos el snackbar
        deleteAllPlaces(session);
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
                        <ListItemButton id='deletealldata-button' data-testid='deletealldata-button' variant="contained" endicon={<DeleteIcon/>} className={classes.deleteButton}
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