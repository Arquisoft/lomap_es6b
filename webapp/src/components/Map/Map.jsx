import React, {useEffect, useRef} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import useStyles from './styles';
import 'leaflet/dist/leaflet.css';
import {Typography} from "@mui/material";
import L from 'leaflet';
const Map = (props) => {
    const classes = useStyles(); //for styling
    const {selectedPlaceAutocomplete, places} = props;
    const defaultCoordinates = { lat: 50.8504500, lng: 4.3487800 }; //default center coordinates (Brussels), just temporary
    const mapRef = useRef();

    useEffect(() => {
        if (mapRef.current && places.length > 0) {

            const lastPlace = places[places.length - 1];
            mapRef.current.flyTo([lastPlace.latitude, lastPlace.longitude], 13, {
                duration: 3 // set duration in seconds, lower value means faster animation
            });
        }
    }, [places]);

    useEffect(() => {

        if(selectedPlaceAutocomplete != null){
            console.log('Entroooooo')
            mapRef.current.flyTo([selectedPlaceAutocomplete.lat, selectedPlaceAutocomplete.lon], 13, {
                duration: 3 // set duration in seconds, lower value means faster animation
            });
        }
    }, [selectedPlaceAutocomplete]);


    const blueIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <MapContainer className={classes.mapContainer}
          ref={mapRef}
            center={defaultCoordinates}
            zoom={13}                //zoom level
            scrollWheelZoom={true} //for zooming in and out with the mouse wheel
            //zoomControl={false}       this is for disabling the + - buttons on the map
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places?.map((place) => (
                <Marker key={place.id} position={{lat: place.latitude, lng: place.longitude}} icon={blueIcon}>
                    <Popup>
                        <div><Typography variant="subtitle1">{place.name} | {place.category}</Typography></div>
                        <div><Typography variant="subtitle3">{place.description}</Typography></div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;

