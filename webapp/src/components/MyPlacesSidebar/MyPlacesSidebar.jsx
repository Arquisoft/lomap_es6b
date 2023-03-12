import React from 'react';
import {Typography} from "@mui/material";
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard";
import {Marker, Popup} from "react-leaflet";
const MyPlacesSidebar = (props) => {
    const {places, setPlaces,setSelectedPlaceMyPlaces, deletePlace} = props;
    const classes = useStyles();

    const showPlaces = () => {
        if (places.length === 0) {
            return <Typography variant="body1" display="block" style={{color: '#6e6e6e',display: 'flex', justifyContent:'center'}}>
                (Your added places will appear here)
            </Typography>
        } else {
            return places?.map((place) => (
                <PlaceCard key={place.id} place={place} setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} deletePlace={deletePlace}/>
            ))
        }
    }
  return (
      <div style={{paddingBottom: "20px"}}>
          {showPlaces()}
      </div>
  );
};

export default MyPlacesSidebar;