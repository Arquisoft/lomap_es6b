import React from 'react';
import {IconButton} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const IconsSidebar = (props) => {
    const classes = {
        iconButtonsConstraints: {
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        firstIconButton: {
            marginTop: '28px',
            marginBottom: '28px',
            color: '#D9D9D9',
        },

        middleIconButton: {
            marginBottom: '28px',
            color: '#D9D9D9',
        },

    };
    const {handleSelectedButtonChange} = props;
    const handleButtonClick = (buttonName) => {
        handleSelectedButtonChange(buttonName);
    }


    return (
        <div style={classes.iconButtonsConstraints}>
            <IconButton id="place-icon" data-testid="place-icon" style={classes.firstIconButton} onClick={() => handleButtonClick('MyPlaces')}>    {/*every IconButton has a predefined Icon inside, which is imported from MUI*/}
                <PlaceIcon />               {/*predefined MUI icon*/}
            </IconButton>
            <IconButton id="addplace-icon" data-testid="addplace-icon" style={classes.middleIconButton} onClick={() => handleButtonClick('AddPlace')}>
                <AddLocationAltIcon/>
            </IconButton>
            <IconButton id="groups-icon" data-testid="groups-icon" style={classes.middleIconButton} onClick={() => handleButtonClick('Social')}>
                <GroupsIcon/>
            </IconButton>
            <IconButton id="settings-icon" data-testid="settings-icon" style={classes.middleIconButton} onClick={() => handleButtonClick('Settings')}>
                <SettingsIcon/>
            </IconButton>
            <IconButton id="profile-icon" data-testid="profile-icon" style={classes.middleIconButton} onClick={() => handleButtonClick('Profile')} /*style={{marginTop: 'auto' }} for sending it to the bottom, for now leave commented*/>
                <AccountCircleIcon/>
            </IconButton>
        </div>
    );
};

export default IconsSidebar;