import React from 'react';
import useStyles from './styles';
import {Button, Card, Typography} from "@mui/material";
import { ReactComponent as Logo } from '../../logoLoMap.svg';
const LoginWall = (props) => {
    const classes = useStyles();

  return (
    <div>

        <div className={classes.blurredBg} >
            <Card className={classes.loginCard} style={{borderRadius: '32px'}}>
                <Logo className={classes.logoIcon}/>
                <Typography variant="h4" className={classes.title}>You have to login with your Solid POD in order to use LoMap.</Typography>
                <Button variant="contained" className={classes.loginButton} >Login</Button>
            </Card>
        </div>
    </div>
  );
};

export default LoginWall;