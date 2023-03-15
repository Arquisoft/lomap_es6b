import React from 'react';
import useStyles from "./styles";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import {Button, CardContent} from "@mui/material";

const ProfileSideBar = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.div1}>
                <Avatar className={classes.avatarImage}
                        alt="User image profile"
                />
            </div>
            <div >
                <Card className={classes.cardProfile}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <TextField disabled={true} className={classes.text}
                                           id="email"
                                           label="Email Address"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField disabled={true} className={classes.text}
                                           id="username"
                                           label="Username"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField disabled={true} className={classes.text}
                                           id="webId"
                                           label="WebID"
                                />
                            </ListItem>

                        </List>
                    </CardContent>
                </Card>
                <Button variant="contained"  className={classes.logoutButton}>
                    Log Out
                </Button>
            </div>

        </div>
    );

}
export default ProfileSideBar;