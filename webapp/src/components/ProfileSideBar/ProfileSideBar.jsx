import React from 'react';
import useStyles from "./styles";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import {Alert, Button, CardContent, Snackbar, Typography} from "@mui/material";
import {
    useSession,
    CombinedDataProvider,
    Image,
    Text,
} from "@inrupt/solid-ui-react";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";

const ProfileSideBar = (props) => {
    const classes = useStyles();
    const {userWebId, session} = props;
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleLogout = () => {
        session.logout();
        handleSnackbarOpen();
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div>
            <CombinedDataProvider datasetUrl={userWebId} thingUrl={userWebId}>
                <div className={classes.div1}>
                    <Avatar className={classes.avatarImage}
                            alt="User image profile">
                        <Image property={VCARD.hasPhoto.iri.value} style={{maxHeight: '150px'}}/>
                    </Avatar>

                </div>
                <div >
                    <Card className={classes.cardProfile}>
                        <CardContent>
                            <List>
                                <ListItem>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <Text property={VCARD.fn.iri.value} />
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <TextField editable={false} className={classes.text}
                                               id="webId"
                                               value={userWebId}
                                               InputLabelProps={{ shrink: true }}
                                               label="WebId"
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                    <Button variant="contained"  onClick={handleLogout} className={classes.logoutButton}>
                        Log Out
                    </Button>
                    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                        <Alert onClose={handleSnackbarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                            ¡Log out successfully!
                        </Alert>
                    </Snackbar>
                </div>
            </CombinedDataProvider>
        </div>
    );

}
export default ProfileSideBar;