import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const HomePage = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <div>ledja</div>
        </MapContainer>
    );
};

export default HomePage;
