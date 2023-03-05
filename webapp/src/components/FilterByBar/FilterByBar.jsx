import React from 'react';
import {Autocomplete, TextField} from "@mui/material";

const FilterByBar = (props) => {
    const top100Films = [
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
    <div style={{width: '100%'}}>
        <Autocomplete
            multiple
            id="size-small-outlined-multi"
            size="small"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField {...params} placeholder="Filter by..."/>
            )}
        />
    </div>
  );
};

export default FilterByBar;