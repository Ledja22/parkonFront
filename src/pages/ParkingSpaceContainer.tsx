/** @format */

import { useCallback, useEffect, useState } from 'react';
import ParkingSpaceComponent from '../components/ParkingSpaceComponent';
import ViewParkingSpaceDrawer from '../components/ViewParkingSpaceDrawer';
import API from '../utils/API';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type ParkingSpace = {
	address: string;
	capacity: string;
	closesAt: string;
	id: string;
	name: string;
	opensAt: string;
	telephone: string;
};

const ParkingSpaceContainer = ({onGetParkingSpaces}: any) => {
	const [parkingSpaces, setParkingSpaces] = useState<Array<ParkingSpace>>([]);
	const [selectedParkingSpace, setSelectedParkingSpace] = useState({});

	const getParkingSpaces = useCallback(() => {
		API.get('/parking-spaces')
			.then((res) => {
				const allParkingSpaces = res.data;
				setParkingSpaces(allParkingSpaces);
			onGetParkingSpaces(allParkingSpaces)
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		getParkingSpaces();
	}, [getParkingSpaces]);

	const isObjectEmpty = (object: {}) => Object.keys(object).length === 0;

	const handleParkingSpotChange = (parkingSpace: any) => [
		setSelectedParkingSpace(parkingSpace),
	];

	return (
		<div className="flex flex-col bg-gray-200 overflow-scroll">
			{isObjectEmpty(selectedParkingSpace) &&
				parkingSpaces?.map((parkingSpace) => (
					<div key={parkingSpace.id}>
						<ParkingSpaceComponent
							parkingSpace={parkingSpace}
							onSelect={handleParkingSpotChange}
						/>
					</div>
				))}
			{!isObjectEmpty(selectedParkingSpace) && (
				<ViewParkingSpaceDrawer
					selectedParkingSpace={selectedParkingSpace}
					deSelectParkingSpace={() => setSelectedParkingSpace({})}
				/>
			)}
		</div>
	);
};

export default ParkingSpaceContainer;
