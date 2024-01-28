import React from 'react';
import { UserWrapper } from './User.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectEmail, selectIsLoading } from 'myRedux';

export const User = () => {
  const email = useSelector(selectEmail);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  return (
    <UserWrapper>
      <p>Welcome {email}</p>
      <button onClick={() => dispatch(logout())} disabled={isLoading}>
        Logout
      </button>
    </UserWrapper>
  );
};
