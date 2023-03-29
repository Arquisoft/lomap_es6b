import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
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
}));