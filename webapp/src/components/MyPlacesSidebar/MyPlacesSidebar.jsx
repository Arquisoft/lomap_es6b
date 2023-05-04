import React from 'react';
import PlaceCard from "../PlaceCard/PlaceCard";
import {CircularProgress} from "@mui/material";

const MyPlacesSidebar = (props) => {
    const {setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton, setSelectedPlaceComment,
        setSelectedButton,userWebId, showShareButton, isLoading} = props;


    const showPlaces = () => {
        return props.places?.map((place)=> (
            <PlaceCard  key={place._id} place={place} setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces}
            deletePlace={deletePlace} session={session} showDeleteButton = {showDeleteButton}
                       setSelectedPlaceComment={setSelectedPlaceComment} setSelectedButton={setSelectedButton}
                        userWebId={userWebId} showShareButton={showShareButton}/>
        ))

    }


    return (
        <div style={{ paddingBottom: "20px" }}>
            <div style={{textAlign: "center"}}>
                {isLoading ? <CircularProgress color={"inherit"} /> : null}
            </div>
            {showPlaces()}
        </div>
    );
};

export default MyPlacesSidebar;