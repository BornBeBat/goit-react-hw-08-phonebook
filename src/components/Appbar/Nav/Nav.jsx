import { NavLink } from 'react-router-dom';
import { List, ListItem } from './Nav.styled';
import { selectIsLoggedIn } from 'myRedux';
import { useSelector } from 'react-redux';

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
