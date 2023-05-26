/** @format */

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const HomePage = () => {
	const center = [51.505, -0.09];
	return (
        <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
	);
};

export default HomePage;
