import React from 'react';
import {Grid} from "@mui/material";
import FilterByBar from "../FilterByBar/FilterByBar";
import { ReactComponent as Logo } from '../../full_logo_new.svg';
import SearchBox from "../SearchBox/SearchBox";

const Header = (props) => {
    const classes = {
        gridLogo: {
            display: 'flex',
            justifyContent: 'center',
        },

        gridSearchPlacesBar: {
            display: 'flex',
            justifyContent: 'center',

        },

        gridFilterByBar: {
            display: 'flex',
            justifyContent: 'center',
        },

        logoIcon: {
            width: 'auto',
            height: '60px',
            paddingBottom: '10px',
        }

    }; // "classes" is an object that contains all the CSS classes from styles.js
    const {setSelectedPlaceAutocomplete, setSelectedFilters, placeCategories} = props;
  return (
    <div>
      <Grid container spacing={3}> {/* Grid containing Logo, SearchPlacesBar and FilterByBar. Setting the space between them to 3 */}
        <Grid style={classes.gridLogo} item md={5} > {/* "className" takes the CSS class with its name from styles.js */}
            <Logo style={classes.logoIcon}/> {/* Logo is an SVG file (logoLoMap.svg) */}
        </Grid>
        <Grid style={classes.gridSearchPlacesBar} item md={5}>
            <SearchBox setSelectedPlaceAutocomplete={setSelectedPlaceAutocomplete}/>
        </Grid>
        <Grid style={classes.gridFilterByBar} item md={2}>
            <FilterByBar setSelectedFilters={setSelectedFilters} placeCategories={placeCategories}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;