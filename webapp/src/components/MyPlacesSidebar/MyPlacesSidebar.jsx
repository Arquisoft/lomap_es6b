import React from 'react';
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard";

const MyPlacesSidebar = (props) => {
    const {setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton} = props;
    const classes = useStyles();

   
    const showPlaces = () => {
       
        return props.places?.map((place)=> (
            console.log('key ' + place._id),
            <PlaceCard key={place._id} place={place} setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} 
            deletePlace={deletePlace} session={session} showDeleteButton = {showDeleteButton} />
        ))
            
    }


  return (
      <div style={{paddingBottom: "20px"}}>
          {showPlaces()}
      </div>
  );
};

export default MyPlacesSidebar;