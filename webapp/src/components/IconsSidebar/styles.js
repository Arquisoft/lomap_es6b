import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    iconButtonsConstraints: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    firstIconButton: {
        marginTop: '28px',
        marginBottom: '28px',
        color: '#D9D9D9',
    },

    middleIconButton: {
        marginBottom: '28px',
        color: '#D9D9D9',
    },

}));