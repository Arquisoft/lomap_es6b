import React from 'react';
import {IconButton} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from "./styles";

const IconsSidebar = (props) => {
    const classes = useStyles();

    const handleButtonClick = (buttonName) => {
        props.handleSelectedButtonChange(buttonName);
    }


    return (
        <div className={classes.iconButtonsConstraints}>
            <IconButton id="place-icon" className={classes.firstIconButton} onClick={() => handleButtonClick('MyPlaces')}>    {/*every IconButton has a predefined Icon inside, which is imported from MUI*/}
                <PlaceIcon />               {/*predefined MUI icon*/}
            </IconButton>
            <IconButton id="addplace-icon" className={classes.middleIconButton} onClick={() => handleButtonClick('AddPlace')}>
                <AddLocationAltIcon/>
            </IconButton>
            <IconButton id="groups-icon" className={classes.middleIconButton} onClick={() => handleButtonClick('Social')}>
                <GroupsIcon/>
            </IconButton>
            <IconButton id="settings-icon" className={classes.middleIconButton} onClick={() => handleButtonClick('Settings')}>
                <SettingsIcon/>
            </IconButton>
            <IconButton id="profile-icon" className={classes.middleIconButton} onClick={() => handleButtonClick('Profile')} /*style={{marginTop: 'auto' }} for sending it to the bottom, for now leave commented*/>
                <AccountCircleIcon/>
            </IconButton>
        </div>
    );
};

export default IconsSidebar;