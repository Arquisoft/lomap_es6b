import React from 'react';
import {Autocomplete, TextField } from "@mui/material";
import useStyles from "./styles"; //it is important to import from styles.js

const FilterByBar = (props) => {
    const classes = useStyles();    // "classes" is an object that contains all the CSS classes from styles.js
    const {setSelectedFilters, placeCategories} = props; // "filters" is an array that contains the filters that are currently selected

    const handleOptionSelect = (event, value) => {
        let newFilters = value.map((filter) => filter.title);
        setSelectedFilters(newFilters);
    };

    return (
    <div className={classes.mainConstraints}>
        {/* The way to implement it is to use the Autocomplete component from MUI, and a TextField inside it */}
        <Autocomplete
            multiple
            id="size-small-outlined-multi"  //Predefined MUI properties
            size="medium"
            options={placeCategories}   //Loading the options for the filter
            onChange={handleOptionSelect}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (  // Rendering the TextField inside the Autocomplete
                <TextField {...params}
                    placeholder="🐧 Filter by..."/>
            )}
            sx = {{     // Adding CSS to the TextField
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