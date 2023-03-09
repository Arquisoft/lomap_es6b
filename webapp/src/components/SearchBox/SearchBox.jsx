import React, { useState } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';
import {Box, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const SearchBox = ({ onSelect }) => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');

    const handleInputChange = debounce(async (event, value) => {  // Debounce doesn't allow the function to be called too often
        if (value.length > 0) {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=5`
            );
            setOptions(response.data);
        } else {
            setOptions([]);
            setValue('');
        }

    });

    const handleOptionSelect = (event, value) => {
        //onselect(value);
        setValue(value.display_name);
    };
    const handleInputValueChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Autocomplete
            blurOnSelect
            options={options}
            getOptionLabel={(option) => option.display_name}
            onChange={handleOptionSelect}

            renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="🔎 Search for places in this map..."
                        variant="outlined"
                        value={value}
                        onChange={(event) => handleInputChange(event, event.target.value)}
                        InputProps={{ ...params.InputProps }}
                    />
            )}
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

        />
    );
};

export default SearchBox;
