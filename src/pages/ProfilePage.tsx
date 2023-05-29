/** @format */

import { useEffect, useState } from 'react';
import Layout from '../hoc/Layout';

const ProfilePage = () => {
	//const [userActivity, setUserActivity] = useState([]);

	const userActivity = [
		{
			user: {
				username: 'Ledjaaaa',
			},
			parkingSpace: {
				location: 'tirane',
				address: 'Toptani center',
				when: 'Tuesday 12 march',
			},
			parkingSpot: {
				number: '1',
				occupiedAT: 'march 12 12 oclock',
				freedAt: 'March 12 4pm oclock',
			},
		},
		{
			user: {
				username: 'Ledja',
			},
			parkingSpace: {
				location: 'tirane',
				address: 'Toptani center',
				when: 'Tuesday 12 march',
			},
			parkingSpot: {
				number: '1',
				occupiedAT: 'march 12 12 oclock',
				freedAt: 'March 12 4pm oclock',
			},
		},
		{
			user: {
				username: 'Ledja',
			},
			parkingSpace: {
				location: 'tirane',
				address: 'Toptani center',
				when: 'Tuesday 12 march',
			},
			parkingSpot: {
				number: '1',
				occupiedAT: 'march 12 12 oclock',
				freedAt: 'March 12 4pm oclock',
			},
		},
		{
			user: {
				username: 'Ledja',
			},
			parkingSpace: {
				location: 'tirane',
				address: 'Toptani center',
				when: 'Tuesday 12 march',
			},
			parkingSpot: {
				number: '1',
				occupiedAT: 'march 12 12 oclock',
				freedAt: 'March 12 4pm oclock',
			},
		},
	];

	// useEffect(() => {
	// 	API.get('/activity')
	// 		.then((res) => console.log(res))
	// 		.catch((err) => console.log(err.message));
	// }, []);

	return (
		<Layout>
			<div className="flex flex-col text-gray-900 tracking-wider leading-normal">
				<div className="flex flex-col w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
					<div className="flex items-center">
						<h1 className="flex text-center font-sans font-bold break-normal text-green-500 px-2 py-8 text-xl md:text-2xl">
							Hello Ledja, check out your activity here!
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
									<th data-priority="1">Username</th>
									<th data-priority="2">Parking Location</th>
									<th data-priority="3">Time</th>
									<th data-priority="4">Parking Slot</th>
									<th data-priority="5">Occupied at</th>
									<th data-priority="6">Freed at</th>
								</tr>
							</thead>
							<tbody className='space-y-4'>
								<tr className="m-2 p-2">
									<td>Ledja Halltari</td>
									<td>Toptani center</td>
									<td>20:00</td>
									<td>61</td>
									<td>20:00</td>
									<td>23:00</td>
								</tr>
								<tr className="m-2 p-2">
								<td>Ledja Halltari</td>
									<td>Toptani center</td>
									<td>20:00</td>
									<td>61</td>
									<td>20:00</td>
									<td>23:00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProfilePage;
