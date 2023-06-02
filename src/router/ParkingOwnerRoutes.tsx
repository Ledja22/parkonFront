import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ParkingOwnerRoutes: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.authSlice.isLogedin);
  // dhe nese roli esht PARKING_OWNER

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ParkingOwnerRoutes;
