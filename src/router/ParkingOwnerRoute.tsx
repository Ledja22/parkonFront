/** @format */

import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ParkingOwnerRoute: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.authSlice.isLogedin);
	const user = useSelector((state: RootState) => state.userSlice.user); // get user

	return isAuth && user.role === 'PARKING_OWNER' ? (
		<Outlet />
	) : (
		<Navigate to="/signin" />
	);
};

export default ParkingOwnerRoute;
