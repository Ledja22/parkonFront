/** @format */

import { useState } from 'react';
import Input from '../core/Input';
import PrimaryButton from '../core/PrimaryButton';

const CreateNewActivity = ({onCreateActivity} : any) => {
	const [vehiclePlate, setVehiclePlate] = useState('');
	const [opensAt, setOpensAt] = useState('');
	const [closesAt, setClosesAt] = useState('');
	const [status, setStatus] = useState('ONGOING');
	const [parkingSlotType, setParkingSlotType] = useState('CAR');

	return (
		<div className='flex flex-col pt-5 px-4'>
			<Input
				placeholder="Enter vehicle plate"
				className="w-full mb-4 "
				handleInputChange={setVehiclePlate}
			/>
			<Input
				placeholder="Enter reservation start time"
				className="w-full mb-4 "
				handleInputChange={setOpensAt}
			/>
			<Input
				placeholder="Enter reservation end time"
				className="w-full mb-4 "
				handleInputChange={setClosesAt}
			/>
			<Input
				placeholder="Enter parking slot type"
				className="w-full mb-4 "
				handleInputChange={setParkingSlotType}
			/>
            <PrimaryButton
					className="mx-auto py-4"
					label="Book a space now"
					onClick={() => onCreateActivity({vehiclePlate, status,opensAt, closesAt, parkingSlotType})}
				/>
		</div>
	);
};
export default CreateNewActivity