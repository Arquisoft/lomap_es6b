import React from 'react';
import {Grid} from "@mui/material";
import SearchPlacesBar from "../SearchPlacesBar/SearchPlacesBar";
import FilterByBar from "../FilterByBar/FilterByBar";
import { ReactComponent as Logo } from '../../full_logo_new.svg';
import useStyles from './styles.js';
import SearchBox from "../SearchBox/SearchBox";

const Header = (props) => {
    const classes = useStyles(); // "classes" is an object that contains all the CSS classes from styles.js
    const {setSelectedPlaceAutocomplete, setSelectedFilters} = props;
  return (
    <div>
      <Grid container spacing={3}> {/* Grid containing Logo, SearchPlacesBar and FilterByBar. Setting the space between them to 3 */}
        <Grid className={classes.gridLogo} item md={5} > {/* "className" takes the CSS class with its name from styles.js */}
            <Logo className={classes.logoIcon}/> {/* Logo is an SVG file (logoLoMap.svg) */}
        </Grid>
        <Grid className={classes.gridSearchPlacesBar} item md={5}>
            <SearchBox setSelectedPlaceAutocomplete={setSelectedPlaceAutocomplete}/>
        </Grid>
        <Grid className={classes.gridFilterByBar} item md={2}>
            <FilterByBar setSelectedFilters={setSelectedFilters}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;