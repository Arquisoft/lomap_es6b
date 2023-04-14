import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import AddPlaceSidebar from "../AddPlaceSidebar/AddPlaceSidebar";
import MyPlacesSidebar from "../MyPlacesSidebar/MyPlacesSidebar";
import {Typography} from "@mui/material";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import SocialSidebar from "../SocialSidebar/SocialSidebar";
import {getFriends, getPlacesByWebId} from "../../solidapi/solidAdapter";

const DetailsSidebar = (props) => {
    const classes = useStyles();
    const [setContent] = useState("");
    const {places, setPlaces, selectedPoint, setSelectedPoint, setSelectedButton, selectedButton,setSelectedPlaceMyPlaces,
        deletePlace, setPlacesLength,userWebId, session, selectedFriendPlaces, setSelectedFriendPlaces, deleteFriend} = props;
    const [selectedFriend, setSelectedFriend] = useState([]);
    const [showDeleteButton] =useState(true);

    useEffect(() => {
        let friendWebId = selectedFriend.friendURL;
        getPlacesByWebId(session, friendWebId).then((places) => {
            setSelectedFriendPlaces(places);
        });
    }, [selectedFriend],);
    const handleSelectedButton = (buttonName) => {
        switch (buttonName) {
            case 'MyPlaces' :
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            My places.
                        </Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Here you can see, delete or travel to your places.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <MyPlacesSidebar deletePlace={deletePlace} places={places} setPlaces={setPlaces}
                                             setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} session={session}
                                            showDeleteButton = {showDeleteButton}/>
                        </div>
                    </>
                );
            case 'AddPlace' :
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Create a new place.
                        </Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Click on the map and fill the form to create a new place.
                        </Typography>
                        <div>
                            <AddPlaceSidebar places={places} setPlaces={setPlaces} selectedPoint={selectedPoint}
                                             setSelectedPoint={setSelectedPoint} setPlacesLength={setPlacesLength}
                                             userWebId={userWebId} session={session}/>
                        </div>
                    </>
                );
            case 'Social':
                console.log(getFriends(userWebId));
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Friends.
                        </Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Explore your friends places.
                        </Typography>
                        <div>
                            <SocialSidebar userWebId={userWebId} setSelectedFriend={setSelectedFriend}
                                           setSelectedButton={setSelectedButton} deleteFriend={deleteFriend}
                                            session = {session}
                            />
                        </div>
                    </>
                );
            case 'Friend':
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            {selectedFriend.friendName}
                        </Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            {selectedFriend.friendURL}
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <MyPlacesSidebar places={selectedFriendPlaces} setPlaces={setPlaces}
                                             setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces}
                                             setShowDeleteButton = {false}/>
                        </div>
                    </>
                );
            case 'Settings':
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Settings.
                        </Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Customize your experience or delete all your data.
                        </Typography>
                        <div>
                            <SettingsSideBar setPlaces={setPlaces}  />
                        </div>
                    </>
                );
            case 'Profile':
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Profile.
                        </Typography>
                        <Typography className={classes.subtitle} variant="subtitle1">
                            Manage your profile.
                        </Typography>
                        <div>
                            <ProfileSideBar userWebId={userWebId}  session = {session}/>
                        </div>
                    </>
                );
            default:
                setContent("");
                break;
        }
    }

    return (
        <div className={classes.detailsSideBar}>
            {handleSelectedButton(selectedButton)}
        </div>
    );
}

export default DetailsSidebar ;
