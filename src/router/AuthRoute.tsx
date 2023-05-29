import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const AuthRoute: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.authSlice.isLogedin);

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
