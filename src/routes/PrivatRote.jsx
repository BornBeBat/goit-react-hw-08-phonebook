import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsLoggedIn } from 'myRedux';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate state={{ from: location }} to="/login" />;
  }
  return children;
};
