import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mainConstraints: {
        height: "100%",
        width: "100%",
    },

    mainContainer: {
        height: "100%",
        backgroundColor: '#EAEAEA',
        borderRadius: '20px',
    },

    iconsSidebarContainer: {
        minWidth: "100px", //in this way the sidebar will not be too small
        backgroundColor: '#313439',
        borderRadius: '20px',   //round the corners
    },

    detailsSidebarContainer: {
        backgroundColor: '#EAEAEA',
        flexBasis: 0,
        flexGrow: 1,    //important, this makes the sidebar to take all the available space
        borderBottomRightRadius: '20px',    //round bottom right corner
        borderTopRightRadius: '20px'        //round top right corner
    },

}));