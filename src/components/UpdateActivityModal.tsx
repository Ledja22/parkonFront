/** @format */
import BlankModal from '../core/BlankModal';
import PrimaryButton from '../core/PrimaryButton';
import { useMemo, useState } from 'react';
import API from '../utils/API';
import Input from '../core/Input';
import SelectInput from '../core/SelectInput';
import CTimePicker from '../core/CTimePicker';

const UpdateActivityModal = ({
	setOpenModal,
	title,
	selectedActivity,
}: any) => {
	const capitalizeWord = (word: string) => {
		const lowercaseWord = word.toLowerCase();
		return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
	};

	const [vehiclePlate, setVehiclePlate] = useState(
		selectedActivity?.vehiclePlate
	);
	const [status, setStatus] = useState({
		value: selectedActivity?.status.toUpperCase(),
		label: capitalizeWord(selectedActivity.status),
	});
	const [parkingSlotType, setParkingSlotType] = useState({
		value: selectedActivity?.parkingSlotType.toUpperCase(),
		label: capitalizeWord(selectedActivity.parkingSlotType),
	});
	const [opensAt, setOpensAt] = useState(selectedActivity?.opensAt);
	const [closesAt, setClosesAt] = useState(selectedActivity?.closesAt);

	const activityStatusOptions = useMemo(
		() => [
			{ value: 'ONGOING', label: 'Ongoing' },
			{ value: 'COMPLETED', label: 'Completed' },
		],
		[]
	);

	const parkingSlotTypeOptions = useMemo(
		() => [
			{ value: 'CAR', label: 'Car' },
			{ value: 'BIKE', label: 'Bike' },
			{ value: 'VAN', label: 'Van' },
		],
		[]
	);

	const editActivity = () => {
		const payload = {
			vehiclePlate,
			opensAt,
			closesAt,
			status: status?.value,
			parkingSlotType: parkingSlotType?.value,
		};
		API.patch(`/activity/${selectedActivity.id}`, payload)
			.then((res) => {
				console.log(res);
				setOpenModal(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<BlankModal
				setOpenModal={setOpenModal}
				title={title}
				maxW="md"
				otherButtons={[
					<PrimaryButton label="Edit" onClick={() => editActivity()} />,
				]}>
				<div>
					<label>Enter vehicle plate</label>
					<Input
						placeholder="Enter vehicle plate"
						className="w-full mb-4 "
						value={vehiclePlate}
						handleInputChange={setVehiclePlate}
					/>
					<label>Select status</label>

					<SelectInput
						placeholder="Select status"
						options={activityStatusOptions}
						selectedOptionState={[status, setStatus]}
						className="mb-4"
						maxHeight="400px"
					/>
					<label>Select parking slot</label>
					<SelectInput
						placeholder="Select parking slot"
						options={parkingSlotTypeOptions}
						selectedOptionState={[parkingSlotType, setParkingSlotType]}
						className="mb-4"
						maxHeight="400px"
					/>
					<label>Enter reservation start time</label>
					<CTimePicker
						placeholder="Enter reservation start time"
						className="w-full mb-4 "
						value={opensAt}
						handleInputChange={setOpensAt}
					/>
					<label>Enter reservation end time</label>
					<CTimePicker
						placeholder="Enter reservation end time"
						className="w-full mb-4 "
						value={closesAt}
						handleInputChange={setClosesAt}
					/>
				</div>
			</BlankModal>
		</div>
	);
};
export default UpdateActivityModal;
