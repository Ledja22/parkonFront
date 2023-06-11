/** @format */

import { SetStateAction, useState } from 'react';
import BlankModal from '../core/BlankModal';
import Input from '../core/Input';
import API from '../utils/API';
import PrimaryButton from '../core/PrimaryButton';

const AddParkingSpaceModal = ({ setOpenModal, title, onSuccess }: any) => {
	const [name, setName] = useState('');
	const [capacity, setCapacity] = useState('');
	const [address, setAddress] = useState('');
	const [opensAt, setOpensAt] = useState('');
	const [closesAt, setClosesAt] = useState('');
	const [telephone, setTelephone] = useState('');

	const addParkingSpace = () => {
		const payload = {name, capacity, address, opensAt, closesAt, telephone};
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
						placeholder="Enter capacity"
						className="w-full mb-4 "
						handleInputChange={setCapacity}
					/>
					<Input
						placeholder="Enter address"
						className="w-full mb-4 "
						handleInputChange={setAddress}
					/>
					<Input
						placeholder="Enter opens at"
						className="w-full mb-4 "
						handleInputChange={setOpensAt}
					/>
					<Input
						placeholder="Enter closes at"
						className="w-full mb-4 "
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
