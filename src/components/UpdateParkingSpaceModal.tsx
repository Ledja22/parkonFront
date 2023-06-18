/** @format */

import { useState } from 'react';
import BlankModal from '../core/BlankModal';
import Input from '../core/Input';
import API from '../utils/API';
import PrimaryButton from '../core/PrimaryButton';
import CTimePicker from '../core/CTimePicker';

const UpdateParkingSpaceModal = ({
	setOpenModal,
	title,
	parkingSpace,
}: any) => {
	const [name, setName] = useState(parkingSpace.name);
	const [carCapacity, setCarCapacity] = useState(parkingSpace.carCapacity);
	const [vanCapacity, setVanCapacity] = useState(parkingSpace.vanCapacity);
	const [bikeCapacity, setBikeCapacity] = useState(parkingSpace.bikeCapacity);
	const [latitude, setLatitude] = useState(parkingSpace.latitude);
	const [longitude, setLongitude] = useState(parkingSpace.longitude);
	const [address, setAddress] = useState(parkingSpace.address);
	const [opensAt, setOpensAt] = useState(parkingSpace.opensAt);
	const [closesAt, setClosesAt] = useState(parkingSpace.closesAt);
	const [telephone, setTelephone] = useState(parkingSpace.telephone);

	const editParkingSpace = () => {
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
		API.patch(`/parking-spaces/${parkingSpace.id}`, payload)
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
					<PrimaryButton label="Edit" onClick={() => editParkingSpace()} />,
				]}>
				<div>
					<Input
						value={name}
						placeholder="Enter name"
						className="w-full mb-4 "
						handleInputChange={setName}
					/>
					<Input
						value={carCapacity}
						placeholder="Enter car capacity"
						className="w-full mb-4 "
						handleInputChange={setCarCapacity}
					/>
					<Input
						value={vanCapacity}
						placeholder="Enter van capacity"
						className="w-full mb-4 "
						handleInputChange={setVanCapacity}
					/>
					<Input
						value={bikeCapacity}
						placeholder="Enter bike capacity"
						className="w-full mb-4 "
						handleInputChange={setBikeCapacity}
					/>
					<Input
						value={latitude}
						placeholder="Enter latitude"
						className="w-full mb-4 "
						handleInputChange={setLatitude}
					/>
					<Input
						value={longitude}
						placeholder="Enter longitude"
						className="w-full mb-4 "
						handleInputChange={setLongitude}
					/>
					<Input
						value={address}
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
						value={telephone}
						placeholder="Enter telephone"
						className="w-full mb-4 "
						handleInputChange={setTelephone}
					/>
				</div>
			</BlankModal>
		</div>
	);
};

export default UpdateParkingSpaceModal;
