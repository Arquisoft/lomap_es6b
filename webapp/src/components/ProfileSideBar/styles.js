import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    avatarImage: {
        width: 150,
        height: 150,
        margin: 'auto',
        marginBottom:'10px',
    },
    cardProfile: {
        margin: 'auto',
        paddingTop:'10px',
        width: '80%',
        backgroundColor: "#f3f2f2",
        borderRadius:'15px',
    },
    text: {
        width:'100%',
        flexGrow:1,
        flexBasis:0,
    },
    logoutButton: {
        color : "#faf5f3",
        fontSize: "20px",
        justifyContent: "center",
        backgroundColor: "#ea6563",
        borderRadius: "6px",
        margin: '35%',
        marginBottom: '5px',
        marginTop: '10px',

        '&:hover': {
            backgroundColor: "#da5a57",
        }
    },
    div1: {
        paddingBottom:'10px',
    }

}));