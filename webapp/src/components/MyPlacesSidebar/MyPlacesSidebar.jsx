import React, {useState} from 'react';
import useStyles from "./styles";
import PlaceCard from "../PlaceCard/PlaceCard";
import {CircularProgress} from "@mui/material";

const MyPlacesSidebar = (props) => {
    const {setSelectedPlaceMyPlaces, deletePlace, session, showDeleteButton, setSelectedPlaceComment,
        setSelectedButton,userWebId, showShareButton} = props;
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000); // 2000 milisegundos = 2 segundos
    // }, []);

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
            {/*{isLoading ? (*/}
            {/*    <CircularProgress color={"inherit"} />*/}
            {/*) : (*/}
            {showPlaces()}
            {/*)}*/}
        </div>
    );
};

export default MyPlacesSidebar;