/** @format */

import ParkingSpaceComponent from '../components/ParkingSpaceComponent';
import ViewParkingSpaceDrawer from '../components/ViewParkingSpaceDrawer';

const ParkingSpaceContainer = () => {
	return (
		<div className="flex flex-col bg-gray-200 overflow-scroll">
            <ViewParkingSpaceDrawer />
			{/* <ParkingSpaceComponent />
			<ParkingSpaceComponent />
			<ParkingSpaceComponent />
			<ParkingSpaceComponent />
			<ParkingSpaceComponent /> */}
		</div>
	);
};

export default ParkingSpaceContainer;
