import React from 'react';
import { List, ListItem } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';

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
