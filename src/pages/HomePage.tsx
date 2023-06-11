/** @format */

import { useSelector } from 'react-redux';
import Layout from '../hoc/Layout';
import LeafletMap from './LeafletMap';
import ParkingSpaceContainer from './ParkingSpaceContainer';
import { RootState, store } from '../redux/store';
import { SetStateAction, useState } from 'react';

const HomePage = () => {
	const [parkingSpaces, setParkingSpaces] = useState([])
	const token = store.getState().authSlice.accessToken;

	console.log("home" , token);

	const user = useSelector((state: RootState) => state.userSlice.user); // get user
    console.log(user)


	return (
		<Layout>
			<div
				className="relative grid grid-cols-[9fr_4fr]"
				style={{ height: 'calc(100vh - (60px + 61px))' }}>
				<LeafletMap parkingSpaces={parkingSpaces} />
				<ParkingSpaceContainer onGetParkingSpaces={(parkingSpaces: SetStateAction<never[]>) => setParkingSpaces(parkingSpaces)}/>
			</div>
		</Layout>
	);
};
export default HomePage;
