/** @format */

import { useState } from 'react';
import ViewParkingSpaceDrawer from './ViewParkingSpaceDrawer';

const ParkingSpaceComponent = ({ parkingSpace, onSelect }: any) => {
	return (
		<>
			<div className="cursor-pointer mx-2" onClick={() => onSelect(parkingSpace)}>
				<div className="flex  flex-col border-1 border-green-500 rounded-lg m-3">
					<div className="flex items-center justify-center bg-green-500 rounded-md text-white p-3">
						<div className="flex justify-between">
							<div>{parkingSpace?.address || 'Tirana'}</div>
							<div className="ml-5 text-sm">
								{parkingSpace?.capacity || '20'} open spots
							</div>
						</div>
					</div>
					<div className="bg-white rounded-lg">
						<div className="flex justify-between text-gray-600 m-3 p-3 rounded-lg">
							<div className="text-lg">{parkingSpace?.name || 'Tirana'}</div>
							<div className="text-lg">
								{parkingSpace?.opensAt || '9:00 AM'}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ParkingSpaceComponent;
