import React from 'react';
import {Button, Card, Typography} from "@mui/material";
import { ReactComponent as Logo } from '../../full_logo_new.svg';
import { useState } from 'react';
import { LoginButton } from "@inrupt/solid-ui-react";

const LoginWall = (props) => {
    const classes = {
        blurredBg: {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(10px)',
            zIndex: '100',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        loginCard: { // add parent class
            minWidth: '30vw',
            minHeight: '30vh',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            padding: '32px',
            margin: '16px',
            justifyContent: 'center',
            alignItems: 'center',
        },

        title: {
            marginTop: '24px !important',
        },

        loginButton: {
            alignSelf: 'center',
            minHeight: '50px',
            width: '300px',
            marginTop: '24px !important',
        },
        logoIcon: {
            width: 'auto',
            height: '80px',
        }
    };
    const [idp] = useState("https://inrupt.net");
    const [currentUrl] = useState("https://uo282249.github.io/lomap_es6b/");
    //const [currentUrl] = useState("http://localhost:3000/");

    
  return (
    <div>
        <div style={classes.blurredBg} >
            <Card style={classes.loginCard}>
                <Logo style={classes.logoIcon}/>
                <Typography variant="h4" style={classes.title}>You have to login with your Solid POD in order to use LoMap.</Typography>
                <LoginButton

                    oidcIssuer={idp}
                  redirectUrl={currentUrl}
                  options={{ mode:'no-cors'}}
                >
                  <Button data-testid='loginButton' id='login-button' variant="contained" style={classes.loginButton}>Login</Button>
                </LoginButton>
            </Card>
        </div>
    </div>
  );
};

export default LoginWall;