import React, {useState} from 'react';
import useStyles from "./styles";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import LockIcon from '@mui/icons-material/Lock';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const SettingsSideBar = () => {
    const classes = useStyles();

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [openAppearance, setOpenAppearance] = React.useState(false);
    const [openPrivacy, setOpenPrivacy] = React.useState(false);
    const handleClickAppearance = () => {
        setOpenAppearance(!openAppearance);
    };

    const handleClickPrivacy = () => {
        setOpenPrivacy(!openPrivacy);
    };
    const handleDarkMode = (event) => {
        setIsDarkMode(event.target.checked);
    };


    return (
        <div>
            <Box>
                <nav aria-label="settings folders 1">
                    <List>
                        <ListItemButton onClick = {handleClickAppearance}>
                            <ListItemIcon>
                                <AutoAwesomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Appearance" />
                                {openAppearance ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={!openAppearance} timeout="auto" unmountOnExit >
                            <List component="div" sx = {{paddingLeft: '30px'}}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Brightness4Icon />
                                    </ListItemIcon>
                                    <ListItemText id="switch-dark-mode" primary="Dark-mode" />
                                    <Switch
                                        //edge="end"
                                        onChange={handleDarkMode}
                                        checked={isDarkMode}
                                        inputProps={{
                                            'aria-labelledby': 'switch-dark-mode',
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClickPrivacy}>
                            <ListItemIcon>
                                <LockIcon />
                            </ListItemIcon>
                            <ListItemText primary="Privacy" />
                                {openPrivacy ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={!openPrivacy} timeout="auto" unmountOnExit >
                            <List component="div" sx={{ paddingLeft: '30px'}}>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <SecurityIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Privacy Setting 1" />
                                </ListItemButton>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <SyncLockIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Privacy Setting 2" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="settings forders 2">
                    <List>
                        <ListItemButton variant="contained" endIcon={<DeleteIcon />} className={classes.deleteButton}>
                            Delete all data
                        </ListItemButton>
                    </List>
                </nav>
            </Box>
        </div>
    )
}

export default SettingsSideBar;