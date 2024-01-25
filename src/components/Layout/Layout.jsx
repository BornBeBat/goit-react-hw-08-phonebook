import { NavLink, Outlet } from 'react-router-dom';
import { Switch, Toolbar } from '@mui/material';
import { Header, List, Main, ThemeSwitcher, ListItem } from './Layout.styled';

export const Layout = ({ changeTheme, theme }) => {
  return (
    <>
      <Header>
        <Toolbar position="relative">
          <List>
            <ListItem>
              <NavLink to="/">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/register">Register</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/login">Login</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/contacts">Contacts</NavLink>
            </ListItem>
          </List>
          <ThemeSwitcher>
            <Switch onChange={changeTheme} />
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
