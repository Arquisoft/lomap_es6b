import React from 'react';
import {TextField, Typography} from "@mui/material";

const SearchPlacesBar = (props) => {
    return (
        <>
            <TextField
                id="fullWidth"                                  //Predefined Material-UI (MUI) properties
                placeholder="Search for places in this map..."
                variant="outlined"
                size="medium"
                sx = {{
                    width: '100%',
                    height: '100%',
                    '& .MuiOutlinedInput-root': { // The way to change specific CSS of this MUI component
                        borderRadius: '999px',  // Rounded corners
                        backgroundColor: '#EAEAEA'  // Input background color
                    },
                    '& input': {    // Same as above
                        fontSize: '1.2rem', // Change the font size as desired
                    },
                }}
                InputProps={{   // The way to add a separate icon to the left of the input (it is not included in the text)
                    startAdornment: (

                        <Typography      // Typography is a text element
                            variant="h6" //"variant" simulates the h6 HTML tag
                            sx={{
                                mr: 1.5, // margin right of icon
                            }}
                        >
                            &#128269;   {/* The way to add an icon to the text. The icon is a character from the Unicode character set. */}
                        </Typography>
                    ),
                }}
            />
        </>
    );
}

export default SearchPlacesBar;