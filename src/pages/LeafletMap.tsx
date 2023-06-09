/** @format */

import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

export default function LeafletMap({ parkingSpaces }: any) {
	const position: LatLngExpression = [41.3275, 19.8187];

	return (
		<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{parkingSpaces.map((space: any) => (
				<Marker position={[space.latitude, space.longitude]}>
					<Popup>{space.name}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}
