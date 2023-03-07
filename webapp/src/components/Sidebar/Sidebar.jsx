import React from 'react';
import {Grid} from "@mui/material";
import IconsSidebar from "../IconsSidebar/IconsSidebar";
import useStyles from "./styles";

const Sidebar = (props) => {
    const classes = useStyles();
  return (
      <div className={classes.mainConstraints}>
          {/* In this case, grids do not have assigned any size, this is because the IconsSidebar has a fixed width
          and the detailsSidebar takes the remaining space. (see styles.js) */}
          <Grid container className={classes.mainContainer}>
              <Grid item className={classes.iconsSidebarContainer}>
                    <IconsSidebar/>
              </Grid>
              <Grid item className={classes.detailsSidebarContainer}>
                    <h1 className={classes.tempText}>My places.</h1> {/*Just a temporary text, will be replaced by the details component*/}
              </Grid>
          </Grid>
      </ div>
  );
};

export default Sidebar;