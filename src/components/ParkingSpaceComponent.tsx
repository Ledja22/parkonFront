/** @format */

import React, { useState } from 'react';

type ParkingSpaceProps = {
	location: string;
	time: string;
	//etc/ etc /etc
};

const ParkingSpaceComponent = () => {
	const [viewParkingSpace, setViewParkingSpace] = useState(false);
	return (
		<>
			<div className="cursor-pointer mx-2">
				<div className="flex  flex-col border-1 border-green-500 rounded-lg m-3">
					<div className="flex items-center justify-center bg-green-500 rounded-md text-white p-3">
						<div className="flex justify-between">
							<div>Toptani Center Parking</div>
							<div className="ml-5 text-sm">80 open spots</div>
						</div>
					</div>
					<div className="bg-white rounded-lg">
						<div className="flex justify-between text-gray-600 m-3 p-3 rounded-lg">
							<div className="text-lg">20 MINUTES AWAY FROM YOU</div>
							<div className="text-lg">200L for 2hrs</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ParkingSpaceComponent;
