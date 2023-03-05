import React from 'react';
import {Delete, Edit, Save} from "@mui/icons-material";
import {Button, Grid, IconButton} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const IconsSidebar = (props) => {
  return (
      <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'center'}}>
         <IconButton size="large" style={{ marginTop: '28px', marginBottom: '28px', color: '#D9D9D9'  }}>
            <PlaceIcon/>
         </IconButton>
          <IconButton style={{marginBottom: '28px', color: '#D9D9D9' }}>
              <AddLocationAltIcon/>
          </IconButton>
            <IconButton style={{marginBottom: '28px', color: '#D9D9D9'  }}>
                <GroupsIcon/>
            </IconButton>
            <IconButton style={{marginBottom: '28px', color: '#D9D9D9'  }}>
                <SettingsIcon/>
            </IconButton>
            <IconButton style={{color: '#D9D9D9'}} /*style={{marginTop: 'auto' }}*/>
                <AccountCircleIcon/>
            </IconButton>



    </div>
  );
};

export default IconsSidebar;