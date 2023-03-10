import './App.css';
import {Box, Grid, Paper} from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";
import React,{useEffect, useState} from 'react';

function App() {
    //variable de estado que almacena los datos que traigamos del backend
    const [backendData, setBackendData] = useState([{}])
    //fetch the backend API  (en nuestro caso pueto 3000(?))
    useEffect( () => {
        fetch("/api").then( //cambiar la ruta api por get??????buscar info
            response => { 
                response.json();
                console.log("respuesta convertida a json");
            }
        ).then(
            //una vez ya tenemos los datos en json, los metemos en la variable anterior
            data => {
                setBackendData(data)
            }
        )
    }, [] )

  return (
      <Box className='MainBox'>   {/* Important: it is always necessary to put all the elements inside one parent element*/}
          <Header /> {/* Header: Logo, SearchPlacesBar, FilterByBar */}

          <Grid className='MainGrid' container spacing={3}>{/* 3 spaces between the grids */}
              {/* "container" means that it is a grid with more grids inside */}
              <Grid item
                    md={5}> {/* 5 of 12 columns for the sidebar */}{/* "item" means that it is a grid inside a grid */}
                            {/* "md" means that it is a medium screen size */}
                  <Sidebar /> {/* Sidebar: IconsSidebar, DetailsSidebar */}
              </Grid>

              <Grid item
                    md={7} > {/* 7 of 12 columns for the map */}
                  <Paper className='MainMap' style={{borderRadius: '20px' }}> {/* "sx" is for adding specific styles to a MUI component */}
                      <Map />   {/* Map: OpenStreetMap working with Leaflet */}
                  </Paper>
              </Grid>
          </Grid>
      </Box>
  );
}

export default App;