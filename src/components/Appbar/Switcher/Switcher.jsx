import { Switch } from '@mui/material';
import { ThemeContext } from 'components';
import React, { useContext } from 'react';

export const Switcher = () => {
  const { theme: themeColor, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Switch
        onChange={() => toggleTheme()}
        checked={themeColor !== 'light'}
        color="secondary"
      />
    </>
  );
};
