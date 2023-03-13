import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    deleteButton : {
        display: 'flex',
        color : "#faf5f3",
        fontSize: "20px",
        justifyContent: "center",
        backgroundColor: "#b95756",
        borderRadius: "6px",
        margin: '25px',
        marginBottom: '5px',
        marginTop: '5px',

        '&:hover': {
            backgroundColor: "#983c3a",
        }
    },



}));