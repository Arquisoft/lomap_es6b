import React from 'react';
import {Grid} from "@mui/material";
import IconsSidebar from "../IconsSidebar/IconsSidebar";
import DetailsSidebar from "../DetailsSidebar/DetailsSidebar";

const Sidebar = (props) => {
    const classes = {
        mainConstraints: {
            height: "100%",
            width: "100%",
        },

        mainContainer: {
            height: "100%",
            backgroundColor: '#EAEAEA',
            borderRadius: '20px',
        },

        iconsSidebarContainer: {
            minWidth: "100px", //in this way the sidebar will not be too small
            backgroundColor: '#313439',
            borderRadius: '20px',   //round the corners
        },

        detailsSidebarContainer: {
            backgroundColor: '#EAEAEA',
            flexBasis: 0,
            flexGrow: 1,    //important, this makes the sidebar to take all the available space
            borderBottomRightRadius: '20px',    //round bottom right corner
            borderTopRightRadius: '20px'        //round top right corner
        },

    };

    const {places, setPlaces, selectedButton, setSelectedButton, selectedPoint,
        setSelectedPoint,setSelectedPlaceMyPlaces,deletePlace, setPlacesLength, userWebId, session,
        selectedFriendPlaces, setSelectedFriendPlaces, deleteFriend, placeCategories} = props;
    const handleSelectedButtonChange = (selectedButton) => {
        if (props.handleSelectedButtonChangeMock) props.handleSelectedButtonChangeMock(); //TESTING
        setSelectedButton(selectedButton);
    };

    return (
        <div style={classes.mainConstraints}>
            {/* In this case, grids do not have assigned any size, this is because the IconsSidebar has a fixed width
          and the detailsSidebar takes the remaining space. (see styles.js) */}
            <Grid container style={classes.mainContainer}>
                <Grid item data-testid="icons-sidebar" style={classes.iconsSidebarContainer}>
                    <IconsSidebar  handleSelectedButtonChange={handleSelectedButtonChange} />
                </Grid>
                <Grid item data-testid="details-sidebar" style={classes.detailsSidebarContainer}>
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