import React, {useState} from 'react';
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard";
import {CircularProgress} from "@mui/material";

const MyPlacesSidebar = (props) => {
    const {setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton, setSelectedPlaceComment,
        setSelectedButton,userWebId, showShareButton} = props;
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);

   
    const showPlaces = () => {
        return props.places?.map((place)=> (
            <PlaceCard  key={place._id} place={place} setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} 
            deletePlace={deletePlace} session={session} showDeleteButton = {showDeleteButton}
                       setSelectedPlaceComment={setSelectedPlaceComment} setSelectedButton={setSelectedButton}
                        userWebId={userWebId} showShareButton={showShareButton}/>
        ))

    }


  return (

      <div style={{paddingBottom: "20px"}}>
          {isLoading ? (
              <CircularProgress data-testid='progressSidebar' color={"inherit"} />
          ) : (
              showPlaces()
          )}
      </div>
  );
};

export default MyPlacesSidebar;