import React from 'react';
import {Grid} from "@mui/material";
import SearchPlacesBar from "../SearchPlacesBar/SearchPlacesBar";

const Header = (props) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={5} style={{backgroundColor: 'grey'}}>
            <h1>LoMap</h1>
        </Grid>
        <Grid item md={5} style={{backgroundColor: 'darkgrey'}}>
            <SearchPlacesBar/>
        </Grid>
        <Grid item md={2} style={{backgroundColor: 'grey'}}>
            <h1>Filter by</h1>
        </Grid>
      </Grid>

    </div>
  );
};

export default Header;