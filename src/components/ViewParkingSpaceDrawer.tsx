/** @format */
import React, { useState } from 'react';
import { X } from 'tabler-icons-react';
import PrimaryButton from '../core/PrimaryButton';
import CreateNewActivity from './CreateNewActivity';
import API from '../utils/API';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const DetailItem = (props: any) => {
	return (
		<div className="flex justify-between items-center rounded-lg bg-gray-400 p-2 my-3">
			<div className="text-gray-700 font-semibold">{props.title}</div>
			<div className="text-sm">{props.value || '-'}</div>
		</div>
	);
};

const ViewParkingSpaceDrawer = (props: any) => {
	const [showBookingDetails, setShowBookingDetails] = useState(false);

	const user = useSelector((state: RootState) => state.userSlice.user); // get user

	const createNewActivity = (payload: any) => {
		console.log(payload);
		API.post('/activity', {
			...payload,
			parkingSpaceId: props.selectedParkingSpace.id,
			userId: user.id,
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

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
					title="Car Capacity"
					value={props.selectedParkingSpace?.carCapacity}
				/>
				<DetailItem
					title="Van Capacity"
					value={props.selectedParkingSpace?.vanCapacity}
				/>
				<DetailItem
					title="Bike Capacity"
					value={props.selectedParkingSpace?.bikeCapacity}
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
				<div
					className="mx-auto text-sm rounded-full bg-blue-200 text-blue-600 px-2 mb-2 py-1 cursor-pointer"
					onClick={() => setShowBookingDetails((prev) => !prev)}>
					{showBookingDetails ? 'Hide' : 'Show'} booking information
				</div>
			</div>
			{showBookingDetails && (
				<CreateNewActivity
					onCreateActivity={(payload: any) => createNewActivity(payload)}
				/>
			)}
		</div>
	);
};
export default ViewParkingSpaceDrawer;
