/** @format */

import { useSelector } from 'react-redux';
import Layout from '../hoc/Layout';
import LeafletMap from './LeafletMap';
import ParkingSpaceContainer from './ParkingSpaceContainer';
import { store } from '../redux/store';

const HomePage = () => {
	const token = store.getState().authSlice.accessToken;

	console.log("home" , token);

	return (
		<Layout>
			<div
				className="relative grid grid-cols-[9fr_4fr]"
				style={{ height: 'calc(100vh - (60px + 61px))' }}>
				<LeafletMap />
				<ParkingSpaceContainer />
			</div>
		</Layout>
	);
};
export default HomePage;
