'use client';

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapSection = () => {
    const mapContainerStyle = {
        width: "100%",
        height: "50vh",
    };
    const center = {
        lat: 44.51046564972677,
        lng: 26.073605398253804,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyCtio-aoJEHbPnHG8DlbxD6kwzSee9bIxA">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={12}
            />
        </LoadScript>
    );
};

export default MapSection;
