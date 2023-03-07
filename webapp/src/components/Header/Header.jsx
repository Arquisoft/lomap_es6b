import React from 'react';
import {Grid} from "@mui/material";
import SearchPlacesBar from "../SearchPlacesBar/SearchPlacesBar";
import FilterByBar from "../FilterByBar/FilterByBar";
import { ReactComponent as Logo } from '../../logoLoMap.svg';
import useStyles from './styles.js';

const Header = (props) => {
    const classes = useStyles(); // "classes" is an object that contains all the CSS classes from styles.js
  return (
    <div>
      <Grid container spacing={3}> {/* Grid containing Logo, SearchPlacesBar and FilterByBar. Setting the space between them to 3 */}
        <Grid className={classes.gridLogo} item md={5} > {/* "className" takes the CSS class with its name from styles.js */}
            <Logo/> {/* Logo is an SVG file (logoLoMap.svg) */}
        </Grid>
        <Grid className={classes.gridSearchPlacesBar} item md={5}>
            <SearchPlacesBar/>
        </Grid>
        <Grid className={classes.gridFilterByBar} item md={2}>
            <FilterByBar/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;