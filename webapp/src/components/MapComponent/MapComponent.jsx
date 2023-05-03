import React, {useEffect, useRef, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {Typography} from "@mui/material";
import L from 'leaflet';

const MapComponent = (props) => {
    const classes = {
        mapContainer: {
            height: '100%',
            width: '100%',
            zIndex: '1',
        },
    }; //for styling
    const {selectedPlaceAutocomplete, places, selectedPoint, setSelectedPoint, selectedButton, selectedPlaceMyPlaces,
        placesLength, selectedFilters, selectedFriendPlaces, defaultCoordinates} = props;
    const mapRef = useRef();
    const [showingPlaces, setShowingPlaces] = useState(places);

    useEffect(() => {
        if (mapRef.current && defaultCoordinates.lat && defaultCoordinates.lng) {
            mapRef.current.flyTo([defaultCoordinates.lat, defaultCoordinates.lng], 13, {
                duration: 3 // set duration in seconds, lower value means faster animation
            });
            setSelectedPoint({lat: defaultCoordinates.lat, lng: defaultCoordinates.lng})
        }
    }, [defaultCoordinates]);


    useEffect(() => {
        if (mapRef.current && places.length > 0) {
            const lastPlace = places[places.length - 1];
            mapRef.current.flyTo([lastPlace.latitude, lastPlace.longitude], 13, {
                duration: 3 // set duration in seconds, lower value means faster animation
            });
        }
    }, [placesLength]);

    useEffect(() => {
        if(selectedPlaceAutocomplete != null){
            mapRef.current.flyTo([selectedPlaceAutocomplete.lat, selectedPlaceAutocomplete.lon], 13, {
                duration: 3 // set duration in seconds, lower value means faster animation
            });
        }
    }, [selectedPlaceAutocomplete]);

    useEffect(() => {
        if(selectedPlaceMyPlaces != null){
            mapRef.current.flyTo([selectedPlaceMyPlaces.lat, selectedPlaceMyPlaces.lng], 13, {
                duration: 3 // set duration in seconds, lower value means faster animation
            });
        }
    }, [selectedPlaceMyPlaces]);

    useEffect(() => {
        setShowingPlaces(places);
    }, [places, selectedButton]);

    useEffect(() => {
        setShowingPlaces(selectedFriendPlaces);
    }, [selectedFriendPlaces]);

    const addIcon = new L.Icon({
        iconUrl: 'https://i.imgur.com/IkXb2tv.png',
        iconSize: [35, 35],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const blueIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    const showAddPlaceMarker = () => {
        if(selectedPoint != null && selectedButton === "AddPlace"){
            return <Marker position={{lat: selectedPoint.lat, lng: selectedPoint.lng}} icon={addIcon}> </Marker>
        }
    }

    const showPlaces = () => {
        if(selectedFilters.length === 0){
            return showingPlaces?.map((place) => (
                <Marker key={place.id} position={{lat: place.latitude, lng: place.longitude}} icon={blueIcon}>
                    <Popup>
                        <div><Typography variant="subtitle1">{place.name} | {place.category}</Typography></div>
                        <div><Typography variant="subtitle3">{place.description}</Typography></div>
                    </Popup>
                </Marker>
            ))
        }
        else{
            let filteredPlaces = showingPlaces?.filter((place) => {
                return selectedFilters.includes(place.category);
            } );

            return filteredPlaces?.map((place) => (
                <Marker key={place.id} position={{lat: place.latitude, lng: place.longitude}} icon={blueIcon}>
                    <Popup>
                        <div><Typography variant="subtitle1">{place.name} | {place.category}</Typography></div>
                        <div><Typography variant="subtitle3">{place.description}</Typography></div>
                    </Popup>
                </Marker>
            ))

        }
    }


    // Attach handleMapMove to a map move event
    return (

        <MapContainer
            id='map-id'
            style={classes.mapContainer}
            ref={mapRef}
            center={defaultCoordinates}
            zoom={13}
            scrollWheelZoom={true}
        >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

            <HandleMapClick onClick={(event) => {setSelectedPoint({lat: event.latlng.lat, lng: event.latlng.lng})}} />

            {showAddPlaceMarker()}

            {/*{places?.map((place) => (
                <Marker key={place.id} position={{lat: place.latitude, lng: place.longitude}} icon={blueIcon}>
                    <Popup>
                        <div><Typography variant="subtitle1">{place.name} | {place.category}</Typography></div>
                        <div><Typography variant="subtitle3">{place.description}</Typography></div>
                    </Popup>
                </Marker>
            ))}*/}

            {showPlaces()}

        </MapContainer>

    );
};
const HandleMapClick = ({ onClick }) => {
    useMapEvent('click', (e) => {
        onClick(e);

    });

    return null;
};

export default MapComponent;
