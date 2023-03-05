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
                placeholder="Search"
                variant="outlined"
                size="small"
            />
        </>
    );
}

export default SearchPlacesBar;