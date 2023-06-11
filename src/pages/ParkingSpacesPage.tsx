/** @format */

import {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useCallback,
	useEffect,
	useState,
} from 'react';
import Layout from '../hoc/Layout';
import API from '../utils/API';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import PrimaryButton from '../core/PrimaryButton';
import AddParkingSpaceModal from '../components/AddParkingSpaceModal';
import DefaultIconButton from '../core/DefaultIconButton';
import { Pencil, Trash } from 'tabler-icons-react';
import CancelModal from '../core/CancelModal';
import UpdateParkingSpaceModal from '../components/UpdateParkingSpaceModal';

const ParkingSpacesPage = () => {
	const [parkingSpaces, setParkingSpaces] = useState([]);
	const [openAddModal, setOpenAddModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [selectedParkingSpace, setSelectedParkingSpace] = useState({});

	const user = useSelector((state: RootState) => state.userSlice.user); // get user

	const getParkingSpaces = useCallback(() => {
		API.get(`/parking-spaces/user/${user.id}`)
			.then((res) => {
				const allParkingSpaces = res.data;
				setParkingSpaces(allParkingSpaces);
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteParkingSpace = () => {
		if (selectedParkingSpace) {
			API.delete(`/parking-spaces/${selectedParkingSpace.id}`)
				.then((res) => {
					getParkingSpaces();
					console.log(res);
				})
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		getParkingSpaces();
	}, [getParkingSpaces]);

	return (
		<Layout>
			<div className="flex flex-col text-gray-900 tracking-wider leading-normal">
				<div className="flex flex-col w-full md:w-10/12 mx-auto px-2">
					<div className="flex items-center justify-between">
						<h1 className="flex text-center font-sans font-bold break-normal text-green-500 px-2 py-8 text-xl md:text-2xl">
							Hello {user.username}, check out your parking spaces here!
						</h1>
						<PrimaryButton
							to=""
							onClick={() => setOpenAddModal(true)}
							label="Add parking space"
						/>
					</div>
					<div
						id="recipients"
						className="p-8 mt-6 lg:mt-0 rounded-md shadow-lg border-t-1 bg-white">
						<table
							className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
							id="example"
							style={{
								width: '100%',
								paddingTop: '1em',
								paddingBottom: '1em',
							}}>
							<thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr className="p-3">
									<th data-priority="1">Name</th>
									<th data-priority="2">Capacity</th>
									<th data-priority="3">Telephone</th>
									<th data-priority="4">Address</th>
									<th data-priority="5">Opens at</th>
									<th data-priority="6">Closes at</th>
								</tr>
							</thead>
							<tbody className="space-y-4">
								{parkingSpaces?.map(
									(parkingSpace: {
										name:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| null
											| undefined;
										capacity:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| null
											| undefined;
										telephone:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| null
											| undefined;
										address:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| null
											| undefined;
										opensAt:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| null
											| undefined;
										closesAt:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| null
											| undefined;
									}) => (
										<tr className="m-2 p-2">
											<td>{parkingSpace.name}</td>
											<td>{parkingSpace.capacity}</td>
											<td>{parkingSpace.telephone}</td>
											<td>{parkingSpace.address}</td>
											<td>{parkingSpace.opensAt}</td>
											<td>{parkingSpace.closesAt}</td>
											<td>
												<DefaultIconButton
													icon={<Pencil className="text-gray-700 w-4 h-4" />}
													onClick={() => {
														setSelectedParkingSpace(parkingSpace);
														setOpenEditModal(true);
													}}
												/>
											</td>
											<td>
												<DefaultIconButton
													icon={<Trash className="text-gray-700 w-4 h-4" />}
													onClick={() => {
														setSelectedParkingSpace(parkingSpace);
														setOpenDeleteModal(true);
													}}
												/>
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{openAddModal && (
				<AddParkingSpaceModal
					setOpenModal={setOpenAddModal}
					onSuccess={getParkingSpaces}
					title={'Add parking space '}
				/>
			)}
			{openDeleteModal && (
				<CancelModal
					setOpenModal={setOpenDeleteModal}
					title="Are you sure you want to delete this parking space"
					onCancel={deleteParkingSpace}
				/>
			)}
			{openEditModal && (
				<UpdateParkingSpaceModal
					setOpenModal={setOpenEditModal}
					parkingSpace={selectedParkingSpace}
					onSuccess={getParkingSpaces}
				/>
			)}
		</Layout>
	);
};
export default ParkingSpacesPage;
