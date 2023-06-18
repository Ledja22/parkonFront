/** @format */

import { useMemo, useState } from 'react';
import Input from '../core/Input';
import PrimaryButton from '../core/PrimaryButton';
import SelectInput from '../core/SelectInput';
import CTimePicker from '../core/CTimePicker';

const CreateNewActivity = ({ onCreateActivity }: any) => {
	const [vehiclePlate, setVehiclePlate] = useState('');
	const [opensAt, setOpensAt] = useState('');
	const [closesAt, setClosesAt] = useState('');
	const [status, setStatus] = useState('ONGOING');
	const [parkingSlotType, setParkingSlotType] = useState({
		value: 'CAR',
		label: 'Car',
	});

	const parkingSlotTypeOptions = useMemo(
		() => [
			{ value: 'CAR', label: 'Car' },
			{ value: 'BIKE', label: 'Bike' },
			{ value: 'VAN', label: 'Van' },
		],
		[]
	);

	return (
		<div className="flex flex-col pt-5 px-4">
			<label>Enter vehicle plate</label>
			<Input
				placeholder="Enter vehicle plate"
				className="w-full mb-4 "
				handleInputChange={setVehiclePlate}
			/>
			<label>Enter reservation start time</label>
			<CTimePicker
				placeholder="Enter reservation start time"
				className="w-full mb-4 "
				handleInputChange={setOpensAt}
			/>
			<label>Enter reservation end time</label>
			<CTimePicker
				placeholder="Enter reservation end time"
				className="w-full mb-4 "
				handleInputChange={setClosesAt}
			/>
			<label>Select parking slot</label>
			<SelectInput
				placeholder="Select parking slot"
				options={parkingSlotTypeOptions}
				selectedOptionState={[parkingSlotType, setParkingSlotType]}
				className="mb-4"
				maxHeight="400px"
			/>
			<PrimaryButton
				className="mx-auto py-4"
				label="Book a space now"
				onClick={() =>
					onCreateActivity({
						vehiclePlate,
						status,
						opensAt,
						closesAt,
						parkingSlotType: parkingSlotType?.value,
					})
				}
			/>
		</div>
	);
};
export default CreateNewActivity;
