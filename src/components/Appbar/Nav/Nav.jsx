import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'myRedux';

import { List, ListItem } from './Nav.styled';

export const Nav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <List>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      {isLoggedIn && (
        <ListItem>
          <NavLink to="/contacts">Contacts</NavLink>
        </ListItem>
      )}
    </List>
  );
};
