import React, {useEffect, useState} from 'react';
import AddPlaceSidebar from "../AddPlaceSidebar/AddPlaceSidebar";
import MyPlacesSidebar from "../MyPlacesSidebar/MyPlacesSidebar";
import {Typography} from "@mui/material";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import SocialSidebar from "../SocialSidebar/SocialSidebar";
import {getFriends, getPlacesByWebId} from "../../solidapi/solidAdapter";
import CommentsSidebar from "../CommentsSidebar/CommentsSidebar";

const DetailsSidebar = (props) => {
    const classes = {
        title: {
            margin: '25px',
            marginBottom: '0px',
            color: '#313439',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
        },
        subtitle: {
            margin: '25px',
            marginTop: '0px',
            marginBottom: '10px',
            color: 'rgba(49,52,57,0.49)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
        },

    };
    let setContent = useState("");
    const {places, setPlaces, selectedPoint, setSelectedPoint, setSelectedButton, selectedButton,setSelectedPlaceMyPlaces,
        deletePlace, setPlacesLength,userWebId, session, selectedFriendPlaces, setSelectedFriendPlaces, deleteFriend,
        placeCategories, isLoading, setIsLoading} = props;
    const [selectedFriend, setSelectedFriend] = useState([]);
    const [selectedPlaceComment, setSelectedPlaceComment] = useState([]);
    const [showDeleteButton] = useState(true);
    const selectedFriendUsername = selectedFriend.friendURL?.split("/")[2].split(".")[0]
    const [showShareButton] = useState(true);

    useEffect(async () => {
        let friendWebId = selectedFriend.friendURL;
        if (session && friendWebId) {
            setIsLoading(true);
            await getPlacesByWebId(session, friendWebId).then((places) => {setSelectedFriendPlaces(places); setIsLoading(false);});
        }
    }, [selectedFriend]);
    const handleSelectedButton = (buttonName) => {
        switch (buttonName) {
            case 'MyPlaces' :
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            My places.
                        </Typography>
                        <Typography style={classes.subtitle} variant="subtitle1">
                            Here you can see, delete or travel to your places.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <MyPlacesSidebar deletePlace={deletePlace} places={places} setPlaces={setPlaces}
                                             setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} session={session}
                                            showDeleteButton = {showDeleteButton} setSelectedPlaceComment={setSelectedPlaceComment}
                                             setSelectedButton={setSelectedButton} userWebId={userWebId}
                                            showShareButton = {showShareButton} isLoading={isLoading}
                            />
                        </div>
                    </>
                );
            case 'AddPlace' :
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            Create a new place.
                        </Typography>
                        <Typography style={classes.subtitle} variant="subtitle1">
                            Click on the map and fill the form to create a new place.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <AddPlaceSidebar places={places} setPlaces={setPlaces} selectedPoint={selectedPoint}
                                             setSelectedPoint={setSelectedPoint} setPlacesLength={setPlacesLength}
                                             userWebId={userWebId} session={session} placeCategories={placeCategories}/>
                        </div>
                    </>
                );
            case 'Social':
                console.log(getFriends(userWebId));
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            Friends.
                        </Typography>
                        <Typography style={classes.subtitle} variant="subtitle1">
                            Explore your friends places.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <SocialSidebar userWebId={userWebId}
                                           setSelectedFriend={setSelectedFriend}
                                           setSelectedButton={setSelectedButton}
                                           deleteFriend={deleteFriend}
                                           session = {session}/>
                        </div>
                    </>
                );
            case 'Friend':
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            {selectedFriend.friendName}
                        </Typography>
                        <Typography style={classes.subtitle} variant="h6">
                            {selectedFriendUsername}
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <MyPlacesSidebar places={selectedFriendPlaces} setPlaces={setPlaces}
                                             setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces}
                                             setShowDeleteButton = {false}
                                             setSelectedPlaceComment={setSelectedPlaceComment}
                                             setSelectedButton={setSelectedButton}
                                             showShareButton = {false} isLoading={isLoading}
                            />
                        </div>
                    </>
                );
            case 'Settings':
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            Settings.
                        </Typography>
                        <Typography style={classes.subtitle} variant="subtitle1">
                            Customize your experience or delete all your data.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <SettingsSideBar setPlaces={setPlaces}  session={session}/>
                        </div>
                    </>
                );
            case 'Profile':
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            Profile.
                        </Typography>
                        <Typography style={classes.subtitle} variant="subtitle1">
                            Manage your profile.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <ProfileSideBar userWebId={userWebId}  session = {session}/>
                        </div>
                    </>
                );
            case 'Comments':
                return (
                    <>
                        <Typography style={classes.title} variant="h4">
                            {selectedPlaceComment.name}
                        </Typography>
                        <Typography style={classes.subtitle} variant="subtitle1">
                            Here are all the comments made on this place.
                        </Typography>
                        <div style={{ overflow: "auto", maxHeight: "70vh" }}>
                            <CommentsSidebar userWebId={userWebId}  session = {session} place={selectedPlaceComment}/>
                        </div>
                    </>
                );
            default:
                setContent="";
                break;
        }
    }

    return (
        <div >
            {handleSelectedButton(selectedButton)}
        </div>
    );
}

export default DetailsSidebar ;
