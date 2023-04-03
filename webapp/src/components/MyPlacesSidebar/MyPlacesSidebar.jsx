import React from 'react';
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard"
const MyPlacesSidebar = (props) => {
    const {places, setPlaces,setSelectedPlaceMyPlaces, deletePlace} = props;
    const classes = useStyles();


    const showPlaces = () => {
       
        return props.places.map((place)=> (
            console.log('key ' + place._id),
            <PlaceCard key={place._id} place={place} setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} deletePlace={deletePlace}/>
        ))
            
    }


  return (
      <div style={{paddingBottom: "20px"}}>
          {showPlaces()}
      </div>
  );
};

export default MyPlacesSidebar;