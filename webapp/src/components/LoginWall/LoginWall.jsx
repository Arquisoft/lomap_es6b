import React from 'react';
import useStyles from './styles';
import {Button, Card, Typography} from "@mui/material";
import { ReactComponent as Logo } from '../../full_logo_new.svg';
import { useState } from 'react';
import { LoginButton } from "@inrupt/solid-ui-react";

const LoginWall = (props) => {
    const classes = useStyles();
    const [idp] = useState("https://inrupt.net");
    // const [currentUrl] = useState("https://uo282249.github.io/lomap_es6b/");
    const [currentUrl] = useState("http://localhost:3000/");

    
  return (
    <div>
        <div className={classes.blurredBg} >
            <Card className={classes.loginCard}>
                <Logo className={classes.logoIcon}/>
                <Typography variant="h4" className={classes.title}>You have to login with your Solid POD in order to use LoMap.</Typography>
                <LoginButton

                    oidcIssuer={idp}
                  redirectUrl={currentUrl}
                  options={{ mode:'no-cors'}}
                >
                  <Button data-testid='loginButton' id='login-button' variant="contained" className={classes.loginButton}>Login</Button>
                </LoginButton>
            </Card>
        </div>
    </div>
  );
};

export default LoginWall;