/** @format */
import React from 'react';
import { X } from 'tabler-icons-react';

const DetailItem = (props: any) => {
	return (
		<div className="flex justify-between items-center rounded-lg bg-gray-400 p-2 my-3">
			<div className="text-gray-700 font-semibold">{props.title}</div>
			<div className="text-sm">{props.value || '-'}</div>
		</div>
	);
};

const ViewParkingSpaceDrawer = (props: any) => {

    console.log(props.selectedParkingSpace);

	return (
		<div>
			<div className="flex justify-between rounded-lg bg-green-500 mt-2 px-5 py-2 mx-1">
				<h2 className="my-auto text-center text-white font-lg ">
					{props.selectedParkingSpace?.address}
				</h2>
				<X
					className="w-7 h-7 cursor-pointer text-white"
					onClick={() => props.deSelectParkingSpace()}
				/>
			</div>
			<div className="flex flex-col overflow-scroll mx-5">
				<DetailItem
					title="Address"
					value={props.selectedParkingSpace?.address}
				/>
				<DetailItem title="Name" value={props.selectedParkingSpace?.name} />
				<hr />
				<DetailItem
					title="Capacity"
					value={props.selectedParkingSpace?.capacity}
				/>
				<DetailItem
					title="Closes at"
					value={props.selectedParkingSpace?.closesAt}
				/>
				<hr />
				<DetailItem
					title="Opens at"
					value={props.selectedParkingSpace?.opensAt}
				/>
				<DetailItem
					title="Telephone"
					value={props.selectedParkingSpace?.telephone}
				/>
				<hr />
			</div>
		</div>
	);
};
export default ViewParkingSpaceDrawer;
