import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from "./styles";

import handleButtonAction from '../DetailsSidebar/DetailsSidebar';
import Sidebar from "../Sidebar/Sidebar";
const IconsSidebar = (props) => {
    const classes = useStyles();

    const handleButtonClick = (buttonName) => {
        console.log('Se ha pulsado el boton ' + buttonName);
        props.handleSelectedButtonChange(buttonName);
    }


    return (
        <div className={classes.iconButtonsConstraints}>
            <IconButton className={classes.firstIconButton} onClick={() => handleButtonClick('MyPlaces')}>    {/*every IconButton has a predefined Icon inside, which is imported from MUI*/}
                <PlaceIcon/>               {/*predefined MUI icon*/}
            </IconButton>
            <IconButton className={classes.middleIconButton} onClick={() => handleButtonClick('AddPlace')}>
                <AddLocationAltIcon/>
            </IconButton>
            <IconButton className={classes.middleIconButton} onClick={() => handleButtonClick('Social')}>
                <GroupsIcon/>
            </IconButton>
            <IconButton className={classes.middleIconButton} onClick={() => handleButtonClick('Settings')}>
                <SettingsIcon/>
            </IconButton>
            <IconButton className={classes.middleIconButton} onClick={() => handleButtonClick('Profile')} /*style={{marginTop: 'auto' }} for sending it to the bottom, for now leave commented*/>
                <AccountCircleIcon/>
            </IconButton>
        </div>
    );
};

export default IconsSidebar;