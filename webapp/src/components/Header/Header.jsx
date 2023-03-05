import React from 'react';
import {Grid} from "@mui/material";
import SearchPlacesBar from "../SearchPlacesBar/SearchPlacesBar";
import FilterByBar from "../FilterByBar/FilterByBar";
import { ReactComponent as Logo } from '../../logoLoMap.svg';
const Header = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item md={5} xs={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <Logo/>
        </Grid>
        <Grid item md={5} xs={5} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <SearchPlacesBar/>
        </Grid>
        <Grid item md={2} xs={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <FilterByBar/>
        </Grid>
      </Grid>

    </div>
  );
};

export default Header;