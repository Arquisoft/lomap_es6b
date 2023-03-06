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
    return (
        <div className={classes.iconButtonsConstraints}>
            <IconButton className={classes.firstIconButton}>    {/*every IconButton has a predefined Icon inside, which is imported from MUI*/}
                <PlaceIcon/>               {/*predefined MUI icon*/}
            </IconButton>
            <IconButton className={classes.middleIconButton}>
                <AddLocationAltIcon/>
            </IconButton>
            <IconButton className={classes.middleIconButton}>
                <GroupsIcon/>
            </IconButton>
            <IconButton className={classes.middleIconButton}>
                <SettingsIcon/>
            </IconButton>
            <IconButton className={classes.middleIconButton}  /*style={{marginTop: 'auto' }} for sending it to the bottom, for now leave commented*/>
                <AccountCircleIcon/>
            </IconButton>

        </div>
    );
};

export default IconsSidebar;