/** @format */

import { useCallback, useEffect, useState } from 'react';
import ParkingSpaceComponent from '../components/ParkingSpaceComponent';
import ViewParkingSpaceDrawer from '../components/ViewParkingSpaceDrawer';
import API from '../utils/API';

const ParkingSpaceContainer = () => {
	const [parkingSpaces, setParkingSpaces] = useState([]);
	const [selectedParkingSpace, setSelectedParkingSpace] = useState();

	const getParkingSpaces = useCallback(() => {
		API.get('/parking-spaces')
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		getParkingSpaces();
	}, [getParkingSpaces]);
	return (
		<div className="flex flex-col bg-gray-200 overflow-scroll">
			<ParkingSpaceComponent />
			<ParkingSpaceComponent />
			<ParkingSpaceComponent />
			<ParkingSpaceComponent />
			<ParkingSpaceComponent />

			{selectedParkingSpace && (
				<ViewParkingSpaceDrawer parkingSpace={selectedParkingSpace} />
			)}
		</div>
	);
};

export default ParkingSpaceContainer;
