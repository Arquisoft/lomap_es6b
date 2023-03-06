import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import useStyles from './styles';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
    const classes = useStyles(); //for styling
    const defaultCoordinates = { lat: 50.8504500, lng: 4.3487800 }; //default center cordinates (Brussels), just temporary

    return (
        <MapContainer className={classes.mapContainer}
            center={defaultCoordinates}
            zoom={13}                //zoom level
            scrollWheelZoom={true} //for zooming in and out with the mouse wheel
            //zoomControl={false}       this is for disabling the + - buttons on the map
            >
            <TileLayer  //this is strictly neccecary for the map to work, it loads the OpenStreetMap (OSM) map and gives them the correct attribution
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default Map;

