import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';

import {Alert, Button, CardContent, Snackbar, Typography} from "@mui/material";
import {
    CombinedDataProvider,
    Image,
    Text,
} from "@inrupt/solid-ui-react";
import { VCARD } from "@inrupt/lit-generated-vocab-common";

const ProfileSideBar = (props) => {
    const classes = {
        avatarImage: {
            width: "150px",
            height: "150px",
            margin: 'auto',
            marginBottom:'10px',
        },
        cardProfile: {
            margin: 'auto',
            paddingTop:'10px',
            width: 390,
            backgroundColor: "#f3f2f2",
            borderRadius:'15px',
        },
        text: {
            display:'flex',
            flexGrow: '1',
            width:'100%'

        },
        logoutButton: {
            color : "#faf5f3",
            fontSize: "20px",
            justifyContent: "center",
            backgroundColor: "#ea6563",
            borderRadius: "6px",
            marginTop: '10px',

            '&:hover': {
                backgroundColor: "#da5a57",
            }
        },
        div1: {
            paddingBottom:'10px',
        }

    };
    const {userWebId, session} = props;
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleLogout = () => {
        if (props.handleLogoutMock) props.handleLogoutMock(); //TESTING
        session.logout();
        handleSnackbarOpen();
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div>
            <CombinedDataProvider datasetUrl={userWebId} thingUrl={userWebId}>
                <div style={classes.div1}>
                    <Avatar style={classes.avatarImage}
                            alt="User image profile">
                        <Image property={VCARD.hasPhoto.iri.value} style={{maxHeight: '150px'}}/>
                    </Avatar>

                </div>
                <div >
                    <Card style={classes.cardProfile}>
                        <CardContent>
                            <List>
                                <ListItem>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <Text property={VCARD.fn.iri.value} />
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <TextField editable={"false"} style={classes.text}
                                               id="webId"
                                               value={userWebId}
                                               InputLabelProps={{ shrink: true }}
                                               label="WebId"
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="contained" data-testid="logout-button" onClick={handleLogout} style={classes.logoutButton} >
                            Log Out
                        </Button>
                    </div>

                    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} data-testid="snack">
                        <Alert onClose={handleSnackbarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                            Logged out successfully!
                        </Alert>
                    </Snackbar>
                </div>
            </CombinedDataProvider>
        </div>
    );

}
export default ProfileSideBar;