
import './App.css';
import {Box, Grid, Paper} from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import {useState, useEffect} from 'react';
import  {getPlaceMarks} from './api/api';


function App() {
   

   //const [places, setPlaces] = useState(getPlacesFromStorage() || []);
   const [places, setPlaces] = useState([]);
   const refreshMyPlacesList = async () => {
    setPlaces(await getPlaceMarks());//donde está este metodo?importado de la api rest
  }

   const [selectedPoint, setSelectedPoint] = useState(null);
   const [selectedPlaceAutocomplete, setSelectedPlaceAutocomplete] = useState(null);
   const [selectedButton, setSelectedButton] = useState("MyPlaces");
    const [selectedPlaceMyPlaces, setSelectedPlaceMyPlaces] = useState(null);
    const [placesLength, setPlacesLength] = useState(0); //used just for the useEffect to work only when a place is added and not when a place is deleted

    useEffect(() => {
        //savePlacesToStorage();//ahora lo hace AddPlacesSideBar.jsx
        //console.log('places changed:', places);
        refreshMyPlacesList();
    }, []);

    useEffect(() => {

    }, [selectedPlaceAutocomplete]);

    useEffect(() => {
        console.log(selectedPoint)
    }, [selectedPoint]);

    
    //YA NO HACE NADA, SE ALMACENA LA CIUDAD DENTRO DE "ADDPLACESIDEBAR.JSX"
    function savePlacesToStorage(){
        //localStorage.setItem("places", JSON.stringify(places));
    }
    function getPlacesFromStorage(){
        //return JSON.parse(localStorage.getItem("places"));
    }

    function deletePlace(placeID){
        setPlaces(places.filter(place => place.id !== placeID));
    }

  return (
      <Box className='MainBox' >   {/* Important: it is always necessary to put all the elements inside one parent element*/}
          <Header setSelectedPlaceAutocomplete={setSelectedPlaceAutocomplete}/> {/* Header: Logo, SearchPlacesBar, FilterByBar */}

          <Grid className='MainGrid' container spacing={3}>{/* 3 spaces between the grids */}
              {/* "container" means that it is a grid with more grids inside */}
              <Grid item
                    md={5}> {/* 5 of 12 columns for the sidebar */}{/* "item" means that it is a grid inside a grid */}
                            {/* "md" means that it is a medium screen size */}

                    
                  <Sidebar places = {places} setPlaces = {setPlaces} selectedButton={selectedButton}
                           setSelectedButton={setSelectedButton} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint}
                           setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} deletePlace={deletePlace}  setPlacesLength={setPlacesLength}/> {/* Sidebar: IconsSidebar, AddPlaceSidebar */}
              </Grid>

              <Grid item
                    md={7} > {/* 7 of 12 columns for the map */}
                  <Paper className='MainMap' style={{borderRadius: '20px' }}> {/* "sx" is for adding specific styles to a MUI component */}
                      <Map places={places} selectedPlaceAutocomplete={selectedPlaceAutocomplete} selectedPoint = {selectedPoint}
                           setSelectedPoint={setSelectedPoint} selectedButton={selectedButton} selectedPlaceMyPlaces={selectedPlaceMyPlaces}
                           placesLength={placesLength}/>   {/* Map: OpenStreetMap working with Leaflet */}
                  </Paper>
              </Grid>
          </Grid>
      </Box>
  );
}

export default App;