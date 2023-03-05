import './App.css';
import {Box, CssBaseline, Grid, Paper} from "@mui/material";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import {useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
      <Box height="95vh" padding='20px'>
          {/* Header */}
          <Header />

          <Grid container spacing={3} style={{ height: 'calc(100% - 64px)' }}>
              {/* Sidebar */}
              <Grid item xs={5}>
                  <Sidebar />
              </Grid>

              {/* Main Content */}
              <Grid item xs >
                  <Paper style={{ height: '100%', overflow: 'auto', borderRadius: '20px' }}>
                      <Map />
                  </Paper>
              </Grid>
          </Grid>
      </Box>
    /*
      <div style={{ height: "100vh", width: "100vw"}}>
        <CssBaseline />
        <Grid container >
            <Grid item md={12} style={{ backgroundColor: 'red', height: "10vh"}}>
                <h1> Header </h1>
            </Grid>
            <Grid item md={5} style={{backgroundColor: 'orange', height: "90vh"}}>
                <h1> Sidebar </h1>
            </Grid>
            <Grid item md={7} style={{backgroundColor: 'greenyellow', height: "90vh"}}>
                <h1> Map </h1>
            </Grid>
        </Grid>
      </ div>*/
  );
}

export default App;