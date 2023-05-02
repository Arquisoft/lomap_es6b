import React from 'react';
import {Grid} from "@mui/material";
import IconsSidebar from "../IconsSidebar/IconsSidebar";
import useStyles from "./styles";
import DetailsSidebar from "../DetailsSidebar/DetailsSidebar";

const Sidebar = (props) => {
    const classes = useStyles();

    const {places, setPlaces, selectedButton, setSelectedButton, selectedPoint,
        setSelectedPoint,setSelectedPlaceMyPlaces,deletePlace, setPlacesLength, userWebId, session,
        selectedFriendPlaces, setSelectedFriendPlaces, deleteFriend, placeCategories} = props;
    const handleSelectedButtonChange = (selectedButton) => {
        if (props.handleSelectedButtonChangeMock) props.handleSelectedButtonChangeMock(); //TESTING
        setSelectedButton(selectedButton);
    };

    return (
        <div className={classes.mainConstraints}>
            {/* In this case, grids do not have assigned any size, this is because the IconsSidebar has a fixed width
          and the detailsSidebar takes the remaining space. (see styles.js) */}
            <Grid container className={classes.mainContainer}>
                <Grid item data-testid="icons-sidebar" className={classes.iconsSidebarContainer}>
                    <IconsSidebar  handleSelectedButtonChange={handleSelectedButtonChange} />
                </Grid>
                <Grid item data-testid="details-sidebar" className={classes.detailsSidebarContainer}>
                    <DetailsSidebar  places = {places} setPlaces = {setPlaces} selectedButton={selectedButton}
                                    selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint}
                                    setSelectedPlaceMyPlaces={setSelectedPlaceMyPlaces} deletePlace={deletePlace}
                                    setPlacesLength={setPlacesLength} userWebId={userWebId}
                                    session={session} setSelectedButton={setSelectedButton}
                                    selectedFriendPlaces={selectedFriendPlaces} setSelectedFriendPlaces={setSelectedFriendPlaces}
                                    deleteFriend={deleteFriend} placeCategories={placeCategories}/>
                </Grid>
            </Grid>
        </ div>
    );
};

export default Sidebar;