import React from 'react';
import {Autocomplete, TextField } from "@mui/material";
import useStyles from "./styles"; //it is important to import from styles.js

const FilterByBar = (props) => {
    const classes = useStyles();    // "classes" is an object that contains all the CSS classes from styles.js
    const top100Films = [   //contains the example options for the filter
        { title: 'Restaurants'},
        { title: 'Bars'},
        { title: 'Cafes'},
        { title: 'Parks'},
        { title: 'Museums'},
        { title: 'Theaters'},
        { title: 'Hotels'},
        { title: 'Banks'},
        { title: 'Hospitals'},
        { title: 'Pharmacies'},
        { title: 'Gas Stations'},
        { title: 'Supermarkets'}
    ];
    return (
    <div className={classes.mainConstraints}>
        {/* The way to implement it is to use the Autocomplete component from MUI, and a TextField inside it */}
        <Autocomplete
            multiple
            id="size-small-outlined-multi"  //Predefined MUI properties
            size="medium"
            options={top100Films}   //Loading the options for the filter
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (  // Rendering the TextField inside the Autocomplete
                <TextField {...params} placeholder="🐧 Filter by..."/>
            )}
            sx = {{     // Adding CSS to the TextField
                width: '100%',
                height: '100%',
                '& .MuiOutlinedInput-root': {   // The way to change specific CSS of this MUI component
                    borderRadius: '999px',  // Rounded corners
                    backgroundColor: '#EAEAEA'  // Input background color
                },
            }}
        />
    </div>
  );
};

export default FilterByBar;