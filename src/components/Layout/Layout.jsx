import { NavLink, Outlet } from 'react-router-dom';
import { Switch, Toolbar } from '@mui/material';
import {
  Header,
  List,
  Main,
  ThemeSwitcher,
  ListItem,
  UserWrapper,
} from './Layout.styled';
import { togleTheme } from 'myRedux/themeSlise';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'myRedux/selectors';

export const Layout = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <>
      <Header>
        <Toolbar position="relative">
          <List>
            <ListItem>
              <NavLink to="/">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/contacts">Contacts</NavLink>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <NavLink to="/register">Register</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/login">Login</NavLink>
            </ListItem>
          </List>

          <UserWrapper>
            <p>Welcome</p>
            <button>quit</button>
          </UserWrapper>

          <ThemeSwitcher>
            <Switch
              onChange={() => dispatch(togleTheme())}
              checked={!theme}
              color="secondary"
            />
            <p>{theme ? 'Light' : 'Dark'}</p>
          </ThemeSwitcher>
        </Toolbar>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
