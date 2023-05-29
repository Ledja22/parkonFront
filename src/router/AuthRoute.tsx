import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Navigate, Outlet } from 'react-router';

const AuthRoute = () => {
  const accessToken = useSelector((state) =>
    _.get(state, 'accessToken', null)
  );

  if (!accessToken) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default AuthRoute;


