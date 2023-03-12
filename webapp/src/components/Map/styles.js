import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    mapContainer: {
        height: '100%',
        width: '100%',
        zIndex: '1',
    },
    mapMarkerCentered: {
        backgroundImage: 'url(https://i.imgur.com/t6y7Jd7.png)',
        width: '48px',
        height: '48px',
        position: 'absolute',
        zIndex: '20',
        left: 'calc(50%)', // adjust left value to center horizontally
        top: 'calc(50%)', // adjust top value to center vertically
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.4s ease',
    },
}));