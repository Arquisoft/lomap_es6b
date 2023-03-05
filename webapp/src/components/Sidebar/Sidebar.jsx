import React from 'react';
import {Grid} from "@mui/material";
import IconsSidebar from "../IconsSidebar/IconsSidebar";

const Sidebar = (props) => {
  return (
      <div style={{ height: "100%", width: "100%"}}>
          <Grid container style={{ height: "100%" }}>
              <Grid item style={{minWidth: "100px", backgroundColor: '#313439', borderRadius: '20px'}}>
                    <IconsSidebar/>
              </Grid>
              <Grid item style={{backgroundColor: '#EAEAEA', flexGrow: 1, borderBottomRightRadius: '20px', borderTopRightRadius: '20px'}}>
                    <h1 style={{color: '#313439', paddingLeft: '30px', fontSize: '40px'}}>My places.</h1>
              </Grid>
          </Grid>
      </ div>
  );
};

export default Sidebar;