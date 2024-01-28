import { Switch } from '@mui/material';
import { selectTheme, togleTheme } from 'myRedux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Switcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <>
      <Switch
        onChange={() => dispatch(togleTheme())}
        checked={!theme}
        color="secondary"
      />
      <p>{theme ? 'Light' : 'Dark'}</p>
    </>
  );
};
