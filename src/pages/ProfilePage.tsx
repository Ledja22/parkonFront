/** @format */

import { useEffect, useState } from 'react';
import API from '../utils/API';

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
		<div>
			<h2>Welcome back, {userActivity[0].user.username}</h2>
            <h4>Check out your activity so far!</h4>
			<div>
				{userActivity.map((activity) => (
					<div className="flex flex-row border space-x-4 bg-gray-100 space-y-2">
						<div>{activity.user.username}</div>
						<div>{activity.parkingSpace.location}</div>
						<div>{activity.parkingSpace.address}</div>
						<div>{activity.parkingSpace.when}</div>
						<div>{activity.parkingSpot.number}</div>
						<div>{activity.parkingSpot.occupiedAT}</div>
						<div>{activity.parkingSpot.freedAt}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfilePage;
