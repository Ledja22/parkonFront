/** @format */

import { SetStateAction, useState } from 'react';
import BlankModal from '../core/BlankModal';
import Input from '../core/Input';
import API from '../utils/API';
import PrimaryButton from '../core/PrimaryButton';

const UpdateParkingSpaceModal = ({
	setOpenModal,
	title,
	parkingSpace,
}: any) => {
	const [name, setName] = useState(parkingSpace.name);
	const [capacity, setCapacity] = useState(parkingSpace.capacity);
	const [address, setAddress] = useState(parkingSpace.address);
	const [opensAt, setOpensAt] = useState(parkingSpace.opensAt);
	const [closesAt, setClosesAt] = useState(parkingSpace.closesAt);
	const [telephone, setTelephone] = useState(parkingSpace.telephone);

	const addParkingSpace = () => {
		const payload = [name, capacity, address, opensAt, closesAt, telephone];
		API.patch(`/parking-spaces/${parkingSpace.id}`)
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
					<PrimaryButton label="Edit" onClick={() => addParkingSpace()} />,
				]}>
				<div>
					<Input
						placeholder="Enter name"
						className="w-full mb-4 "
						value={name}
						handleInputChange={setName}
					/>
					<Input
						placeholder="Enter capacity"
						className="w-full mb-4 "
						value={capacity}
						handleInputChange={setCapacity}
					/>
					<Input
						value={address}
						placeholder="Enter address"
						className="w-full mb-4 "
						handleInputChange={setAddress}
					/>
					<Input
						value={opensAt}
						placeholder="Enter opens at"
						className="w-full mb-4 "
						handleInputChange={setOpensAt}
					/>
					<Input
						value={closesAt}
						placeholder="Enter closes at"
						className="w-full mb-4 "
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
