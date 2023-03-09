import React, {useState} from 'react';
import {Grid} from "@mui/material";
import IconsSidebar from "../IconsSidebar/IconsSidebar";
import useStyles from "./styles";
import DetailsSidebar from "../DetailsSidebar/DetailsSidebar";

const Sidebar = (props) => {
    const classes = useStyles();
    const [selectedButton, setSelectedButton] = useState("MyPlaces");

    const handleSelectedButtonChange = (selectedButton) => {
        setSelectedButton(selectedButton);
    };

  return (
      <div className={classes.mainConstraints}>
          {/* In this case, grids do not have assigned any size, this is because the IconsSidebar has a fixed width
          and the detailsSidebar takes the remaining space. (see styles.js) */}
          <Grid container className={classes.mainContainer}>
              <Grid item className={classes.iconsSidebarContainer}>
                    <IconsSidebar handleSelectedButtonChange={handleSelectedButtonChange}/>
              </Grid>
              <Grid item className={classes.detailsSidebarContainer}>
                   <DetailsSidebar selectedButton={selectedButton}/>
                    <h1 className={classes.tempText}>My places.</h1> {/*Just a temporary text, will be replaced by the details component*/}
              </Grid>
          </Grid>
      </ div>
  );
};

export default Sidebar;