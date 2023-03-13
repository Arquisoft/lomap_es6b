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
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="settings folders 1">
                    <List>
                            <ListItemButton onClick = {handleClickAppearance}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Appearance" />
                                {openAppearance ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={!openAppearance} timeout="auto" unmountOnExit >
                                <List component="div" disablePadding>
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

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleClickPrivacy}>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Privacy" />
                                {openPrivacy ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={!openPrivacy} timeout="auto" unmountOnExit orientation="vertical">
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Privacy Setting 1" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Privacy Setting 2" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </ListItem>
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
    );
};

export default SettingsSideBar;