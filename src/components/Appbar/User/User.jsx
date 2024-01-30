import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout, selectEmail, selectIsLoading } from 'myRedux';

import { UserWrapper } from './User.styled';

export const User = () => {
  const email = useSelector(selectEmail);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  return (
    <UserWrapper>
      {email && (
        <>
          <p>Welcome {email}</p>
          <button onClick={() => dispatch(logout())} disabled={isLoading}>
            Logout
          </button>
        </>
      )}
    </UserWrapper>
  );
};
