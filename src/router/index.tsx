/** @format */

// /** @format */

import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import GuestRoute from './GuestRoute';
import AuthRoute from './AuthRoute';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import ParkingOwnerRoute from './ParkingOwnerRoute';
import ParkingSpacesPage from '../pages/ParkingSpacesPage';

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/signin" element={<LoginPage />} />
			<Route path="/home" element={<AuthRoute />}>
				<Route path="/home" element={<HomePage />} />
			</Route>
			<Route path="/parking-spaces" element={<ParkingOwnerRoute />}>
				<Route path="/parking-spaces" element={<ParkingSpacesPage />} />
			</Route>
			{/* <Route path="/home" element={<HomePage />} />
			<Route path="/parking-spaces" element={<ParkingSpacesPage />} /> */}
			<Route path="/register" element={<RegisterPage />} />
			{/* </Route> */}
			{/* <Toaster /> */}
			<Route path="*" element={<AuthRoute />}>
				<Route path="*" element={<HomePage />} />
			</Route>

			<Route path="*" element={<Navigate to="/home" />} />
		</Routes>
	</Router>
);

export default AppRoutes;
