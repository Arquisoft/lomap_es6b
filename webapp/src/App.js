import './App.css';
import {CssBaseline, Grid} from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import {useState} from "react";

function App() {
  return (

      <>
        <CssBaseline />
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item md={12} style={{ backgroundColor: 'red', maxHeight: '20vh'}}>
                <Header />
            </Grid>
          <Grid item md={5} style={{ minHeight: '80vh', backgroundColor: 'orange'}}>
                <h1> sidebar </h1>
          </Grid>
          <Grid item md={7} style={{height: '100%', width: '100%',backgroundColor: 'greenyellow'}}>
                <Map />
          </Grid>
        </Grid>
      </>
  );
}

export default App;