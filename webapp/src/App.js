
import './App.css';
import {Box, Grid, Paper} from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import {useState, useEffect} from 'react';
import  {getPlaceMarks, getPlaceMarksByUser} from './api/api';
import LoginWall from "./components/LoginWall/LoginWall";
import { SessionProvider} from "@inrupt/solid-ui-react";
import { useSession } from "@inrupt/solid-ui-react/dist";


function App() {

    //uso esto para el control del logeo
    const {session} = useSession();


    const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));
    const [userWebId, setUserWebId] = useState(localStorage.getItem("userWebId"));

    const [places, setPlaces] = useState([]);
    const refreshMyPlacesList = async () => {
        //Con una webId como esta "https://aliciafp15.inrupt.net/profile/card#me";
        const parts = userWebId.split('.'); // Dividimos la cadena en partes utilizando el punto como separador
        const webId = parts[0].split('//')[1]; // Obtenemos la segunda parte después de '//'
        setPlaces(await getPlaceMarksByUser(webId));
    }

    const [selectedPoint, setSelectedPoint] = useState(null);
    const [selectedPlaceAutocomplete, setSelectedPlaceAutocomplete] = useState(null);
    const [selectedButton, setSelectedButton] = useState("MyPlaces");
    const [selectedPlaceMyPlaces, setSelectedPlaceMyPlaces] = useState(null);
    const [placesLength, setPlacesLength] = useState(0); //used just for the useEffect to work only when a place is added and not when a place is deleted
    const [selectedFilters, setSelectedFilters] = useState([]);


    
    useEffect(() => {
        // Check if the user has already logged in before
        const locallySavedLogin = localStorage.getItem("isLogged");
        if (locallySavedLogin === "true") {
            setIsLogged(true);
        }

        // Register the login and logout event listeners
        session.onLogin(() => {
            setIsLogged(true);
            localStorage.setItem("isLogged", "true");
            setUserWebId(session.info.webId);
            localStorage.setItem("userWebId", session.info.webId);
            window.location.reload();
        });

        session.onLogout(() => {
            setIsLogged(false);
            localStorage.removeItem("isLogged");
            setUserWebId(null);
            localStorage.removeItem("userWebId");
            window.location.reload();
        });
    }, [session]);

    /*useEffect(() => {
        localStorage.setItem("isLogged", JSON.stringify(isLogged));
    }, [isLogged]);*/

    useEffect(() => {
        refreshMyPlacesList();
    }, []);



    useEffect(() => {

    }, [selectedPlaceAutocomplete]);

    useEffect(() => {
        console.log(selectedPoint)
    }, [selectedPoint]);


    function deletePlace(placeID){
        setPlaces(places.filter(place => place._id !== placeID));
    }

    const handleLogout = () => {
        session.logout();
    }
    /*const checkIfLogged = () => {
        let locallySavedLogin = JSON.parse(localStorage.getItem("isLogged")); // gets from the cookies if the user is logged in or not
        if(!locallySavedLogin){
            return <LoginWall/>
        }else{
            return null;
        }
    }*/

    return (
        <SessionProvider sessionId="log-in-example">
            {/*{checkIfLogged()}*/}

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
                                 userWebId={userWebId} handleLogout={handleLogout}/> {/* Sidebar: IconsSidebar, AddPlaceSidebar */}
                    </Grid>

                    <Grid item
                          md={7} > {/* 7 of 12 columns for the map */}
                        <Paper className='MainMap' style={{borderRadius: '20px' }}> {/* "sx" is for adding specific styles to a MUI component */}
                            <Map places={places} selectedPlaceAutocomplete={selectedPlaceAutocomplete} selectedPoint = {selectedPoint}
                                 setSelectedPoint={setSelectedPoint} selectedButton={selectedButton} selectedPlaceMyPlaces={selectedPlaceMyPlaces}
                                 placesLength={placesLength} selectedFilters={selectedFilters}/>   {/* Map: OpenStreetMap working with Leaflet */}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            {isLogged ? null : <LoginWall/>}
        </SessionProvider>

    );
}

export default App;