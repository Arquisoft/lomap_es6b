import React, {useState} from 'react';
import useStyles from "./styles";
import AddPlaceSidebar from "../AddPlaceSidebar/AddPlaceSidebar";
import MyPlacesSidebar from "../MyPlacesSidebar/MyPlacesSidebar";
import {Typography} from "@mui/material";
import SettingsSideBar from "../SettingsSideBar/SettingsSideBar";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
const DetailsSidebar = (props) => {
    const classes = useStyles();
    const [content, setContent] = useState("");
    const {places, setPlaces, selectedPoint, setSelectedPoint, selectedButton,setSelectedPlaceMyPlaces,
        deletePlace, setPlacesLength} = props;

    const handleSelectedButton = (buttonName) => {
        switch (buttonName) {
            case 'MyPlaces' :
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            My places.
                        </Typography>
                        <div style={{ overflow: "auto", height: "70vh" }}>
                            <MyPlacesSidebar deletePlace={deletePlace} places={places} setPlaces={setPlaces}
                                             setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces}/>
                        </div>
                    </>
                        );
            case 'AddPlace' :
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Create a new place.
                        </Typography>

                        <div>
                            <AddPlaceSidebar places={places} setPlaces={setPlaces} selectedPoint={selectedPoint}
                            setSelectedPoint={setSelectedPoint} setPlacesLength={setPlacesLength}/>
                        </div>
                    </>
                );
            case 'Friends':
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Friends.
                        </Typography>
                    </>
                );
            case 'Settings':
                return (
                <>
                    <Typography className={classes.title} variant="h4">
                        Settings.
                    </Typography>

                    <div>
                        <SettingsSideBar/>
                    </div>
                </>
                );
            case 'Profile':
                return (
                    <>
                        <Typography className={classes.title} variant="h4">
                            Profile.
                        </Typography>

                        <div>
                            <ProfileSideBar />
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



