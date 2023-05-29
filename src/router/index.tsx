/** @format */

import { Route, BrowserRouter as Router, Routes, redirect } from 'react-router-dom';
import GuestRoute from './GuestRoute';
import AuthRoute from './AuthRoute';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import { Toaster } from 'react-hot-toast';

const AppRoutes = () => (
	<Router>
		<Routes>
			{/* <Route element={<GuestRoute />}></Route> */}
			{/* <Route> */}
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/signin" element={<LoginPage />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/register" element={<RegisterPage />} />
			{/* </Route> */}
			{/* <Toaster /> */}
		</Routes>
	</Router>
);

export default AppRoutes;
