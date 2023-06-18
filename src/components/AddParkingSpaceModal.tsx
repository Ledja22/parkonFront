/** @format */

import { SetStateAction, useState } from 'react';
import BlankModal from '../core/BlankModal';
import Input from '../core/Input';
import API from '../utils/API';
import PrimaryButton from '../core/PrimaryButton';
import CTimePicker from '../core/CTimePicker';

const AddParkingSpaceModal = ({ setOpenModal, title, onSuccess }: any) => {
	const [name, setName] = useState('');
	const [carCapacity, setCarCapacity] = useState();
	const [vanCapacity, setVanCapacity] = useState();
	const [bikeCapacity, setBikeCapacity] = useState();
	const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();
	const [address, setAddress] = useState('');
	const [opensAt, setOpensAt] = useState('');
	const [closesAt, setClosesAt] = useState('');
	const [telephone, setTelephone] = useState('');

	const addParkingSpace = () => {
		const payload = {
			name,
			carCapacity,
			vanCapacity,
			bikeCapacity,
			latitude,
			longitude,
			address,
			opensAt,
			closesAt,
			telephone,
		};
		API.post('/parking-spaces', payload)
			.then((res) => {
				console.log(res);
				onSuccess();
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
					<PrimaryButton label="Add" onClick={() => addParkingSpace()} />,
				]}>
				<div>
					<Input
						placeholder="Enter name"
						className="w-full mb-4 "
						handleInputChange={setName}
					/>
					<Input
						placeholder="Enter car capacity"
						className="w-full mb-4 "
						handleInputChange={setCarCapacity}
					/>
					<Input
						placeholder="Enter van capacity"
						className="w-full mb-4 "
						handleInputChange={setVanCapacity}
					/>
					<Input
						placeholder="Enter bike capacity"
						className="w-full mb-4 "
						handleInputChange={setBikeCapacity}
					/>
					<Input
						placeholder="Enter latitude"
						className="w-full mb-4 "
						handleInputChange={setLatitude}
					/>
					<Input
						placeholder="Enter longitude"
						className="w-full mb-4 "
						handleInputChange={setLongitude}
					/>
					<Input
						placeholder="Enter address"
						className="w-full mb-4 "
						handleInputChange={setAddress}
					/>
					<label>Enter opening time</label>
					<CTimePicker
						placeholder="Enter reservation start time"
						className="w-full mb-4 "
						value={opensAt}
						handleInputChange={setOpensAt}
					/>
					<label>Enter closing time</label>
					<CTimePicker
						placeholder="Enter reservation end time"
						className="w-full mb-4 "
						value={closesAt}
						handleInputChange={setClosesAt}
					/>
					<Input
						placeholder="Enter telephone"
						className="w-full mb-4 "
						handleInputChange={setTelephone}
					/>
				</div>
			</BlankModal>
		</div>
	);
};

export default AddParkingSpaceModal;
