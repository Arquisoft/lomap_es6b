import React from 'react';
import {TextField} from "@mui/material";
import {useStyles} from "tss-react/mui";

const SearchPlacesBar = (props) => {
    const classes = useStyles();
    return (
        <>
            <TextField
                id="fullWidth"
                className={classes.inputRounded}
                placeholder="Search for places in this map..."
                variant="outlined"
                size="small"
                style={{width: '100%'}}
            />
        </>
    );
}

export default SearchPlacesBar;