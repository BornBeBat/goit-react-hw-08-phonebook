import React, { useContext } from 'react';
import { Switch } from '@mui/material';

import { ThemeContext } from 'components';

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
