import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import {useStyles} from "tss-react/mui";
import 'leaflet/dist/leaflet.css';
const Map = (props) => {
    const classes = useStyles();
    const defaultCoordinates = { lat: 50.8504500, lng: 4.3487800 };

    return (

        <>
            <MapContainer
                center={defaultCoordinates}
                zoom={13}
                scrollWheelZoom={true}
                /*}zoomControl={false}{*/
                style={{height: '80vh'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    );
};

export default Map;

