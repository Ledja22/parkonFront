/** @format */

import { useCallback, useEffect, useState } from 'react';
import Layout from '../hoc/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import API from '../utils/API';
import DefaultIconButton from '../core/DefaultIconButton';
import { Pencil, Trash } from 'tabler-icons-react';
import CancelModal from '../core/CancelModal';
import UpdateActivityModal from '../components/UpdateActivityModal';

const ProfilePage = () => {
	const [userActivity, setUserActivity] = useState([]);
	const [selectedActivity, setSelectedActivity] = useState({});
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);

	const user = useSelector((state: RootState) => state.userSlice.user); // get user

	const getActivity = useCallback(() => {
		API.get('/activity')
			.then((res) => {
				setUserActivity(res.data);
			})
			.catch((err) => console.log(err.message));
	}, []);

	useEffect(() => {
		getActivity();
	}, [getActivity]);

	const deleteActivity = () => {
		if (selectedActivity) {
			API.delete(`/activity/${selectedActivity?.id}`)
				.then((res) => {
					getActivity();
					console.log(res);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<Layout>
			<div className="flex flex-col text-gray-900 tracking-wider leading-normal">
				<div className="flex flex-col w-full md:w-10/12  mx-auto px-2">
					<div className="flex items-center">
						<h1 className="flex text-center font-sans font-bold break-normal text-green-500 px-2 py-8 text-xl md:text-2xl">
							Hello {user.username}, check out your activity here!
						</h1>
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
									<th data-priority="1">Status</th>
									<th data-priority="2">Vehicle Plate</th>
									<th data-priority="3">Parking Type</th>
									<th data-priority="4">Reserved At</th>
									<th data-priority="5">Ended At</th>
								</tr>
							</thead>
							<tbody className="space-y-4">
								{userActivity?.map((activity: any) => (
									<tr className="m-2 p-2">
										<td>{activity.status}</td>
										<td>{activity.vehiclePlate}</td>
										<td>{activity.parkingSlotType}</td>
										<td>{activity.opensAt}</td>
										<td>{activity.closesAt}</td>
										<td>
											<DefaultIconButton
												icon={<Pencil className="text-gray-700 w-4 h-4" />}
												onClick={() => {
													setSelectedActivity(activity);
													setOpenEditModal(true);
												}}
												disabled={activity.status === 'COMPLETED'}
											/>
										</td>
										<td>
											<DefaultIconButton
												icon={<Trash className="text-gray-700 w-4 h-4" />}
												onClick={() => {
													setSelectedActivity(activity);
													setOpenDeleteModal(true);
												}}
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{openDeleteModal && (
				<CancelModal
					setOpenModal={setOpenDeleteModal}
					title="Are you sure you want to delete this activity"
					onCancel={deleteActivity}
				/>
			)}
			{openEditModal && (
				<UpdateActivityModal
					setOpenModal={setOpenEditModal}
					selectedActivity={selectedActivity}
					title="Update your activity"
					onSuccess={getActivity}
				/>
			)}
		</Layout>
	);
};

export default ProfilePage;
