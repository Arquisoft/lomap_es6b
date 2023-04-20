
import './App.css';
import {Alert, Box, Grid, Paper, Snackbar} from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import React, {useState, useEffect} from 'react';
import LoginWall from "./components/LoginWall/LoginWall";
import { SessionProvider} from "@inrupt/solid-ui-react";
import { useSession } from "@inrupt/solid-ui-react/dist";

import { getPlaces } from './solidapi/solidAdapter';



const App = () => {

    //uso esto para el control del logeo
    const {session} = useSession();


    const [userWebId, setUserWebId] = useState();
    const [places, setPlaces] = useState([]);


    const [selectedPoint, setSelectedPoint] = useState(null);
    const [selectedPlaceAutocomplete, setSelectedPlaceAutocomplete] = useState(null);
    const [selectedButton, setSelectedButton] = useState("MyPlaces");
    const [selectedPlaceMyPlaces, setSelectedPlaceMyPlaces] = useState(null);
    const [placesLength, setPlacesLength] = useState(0); //used just for the useEffect to work only when a place is added and not when a place is deleted
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedFriendPlaces, setSelectedFriendPlaces] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);


    useEffect(() => {

        // Register the login and logout event listeners
        session.onLogin(() => {
            setUserWebId(session.info.webId);
            handleSnackbarOpen();
        });

        session.onLogout(() => {
            setUserWebId(null);
            window.location.reload();
        });
    }, [session],);



    useEffect(() => {
        const refreshMyPlacesList = async () => {
            //Con una webId como esta "https://aliciafp15.inrupt.net/profile/card#me";
            if(userWebId == null)
                return null;
            const parts = userWebId.split('.'); // Dividimos la cadena en partes utilizando el punto como separador
            //const webId = parts[0].split('//')[1]; // Obtenemos la segunda parte después de '//'
            //setPlaces(await getPlaceMarksByUser(webId));

            //sacando los lugares de los pods
           setPlaces(await getPlaces(session));

        }

        refreshMyPlacesList();
    }, [userWebId]);


    useEffect(() => {
    }, [selectedPlaceAutocomplete]);

    useEffect(() => {
        console.log(selectedPoint)
        console.log(session)
    }, [selectedPoint,session]);


    function deletePlace(placeID){
        setPlaces(places.filter(place => place.id !== placeID));//antes: place._id (por mongo)
    }

    function deleteFriend(friendID) {

    }

    // const handleLogout = () => {
    //     session.logout();
    // }

    const handleSnackbarOpen = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div>
        <SessionProvider sessionId="log-in-example">

            <Box className='MainBox' >   {/* Important: it is always necessary to put all the elements inside one parent element*/}
                <Header setSelectedPlaceAutocomplete={setSelectedPlaceAutocomplete} setSelectedFilters={setSelectedFilters}/> {/* Header: Logo, SearchPlacesBar, FilterByBar */}

                <Grid className='MainGrid' container spacing={3}>{/* 3 spaces between the grids */}
                    {/* "container" means that it is a grid with more grids inside */}
                    <Grid item
                          md={5}> {/* 5 of 12 columns for the sidebar */}{/* "item" means that it is a grid inside a grid */}
                        {/* "md" means that it is a medium screen size */}


                        <Sidebar places = {places} setPlaces = {setPlaces} selectedButton={selectedButton}
                                 setSelectedButton={setSelectedButton} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint}
                                 setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} deletePlace={deletePlace}  setPlacesLength={setPlacesLength}
                                 userWebId={userWebId} session={session} selectedFriendPlaces={selectedFriendPlaces}
                                 setSelectedFriendPlaces={setSelectedFriendPlaces}/> {/* Sidebar: IconsSidebar, AddPlaceSidebar */}
                    </Grid>

                    <Grid item
                          md={7} > {/* 7 of 12 columns for the map */}
                        <Paper className='MainMap' style={{borderRadius: '20px' }}> {/* "sx" is for adding specific styles to a MUI component */}
                            <Map places={places} selectedPlaceAutocomplete={selectedPlaceAutocomplete} selectedPoint = {selectedPoint}
                                 setSelectedPoint={setSelectedPoint} selectedButton={selectedButton} selectedPlaceMyPlaces={selectedPlaceMyPlaces}
                                 placesLength={placesLength} selectedFilters={selectedFilters}
                                 selectedFriendPlaces={selectedFriendPlaces} setSelectedFriendPlaces={setSelectedFriendPlaces}/>   {/* Map: OpenStreetMap working with Leaflet */}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ backgroundColor: '#4caf50', color: '#fff', width: '100%' }}>
                    ¡Login to your account successfully!
                </Alert>
            </Snackbar>
            {session.info.isLoggedIn ? null : <LoginWall/>}
        </SessionProvider>
        </div>
    );
}

export default App;