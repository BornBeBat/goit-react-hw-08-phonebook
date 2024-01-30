import React from 'react';
import { NavLink } from 'react-router-dom';

import { List, ListItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <ListItem>
        <NavLink to="/register">Register</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/login">Login</NavLink>
      </ListItem>
    </List>
  );
};
