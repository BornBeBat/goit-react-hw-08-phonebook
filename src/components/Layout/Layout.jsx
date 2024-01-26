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
import {
  selectIsLoggedIn,
  selectToken,
  logout,
  selectEmail,
  selectIsLoadingAuth,
} from 'myRedux/auth';

export const Layout = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoadingAuth);
  return (
    <>
      <Header>
        <Toolbar position="relative">
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
          {!isLoggedIn && (
            <List>
              <ListItem>
                <NavLink to="/register">Register</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/login">Login</NavLink>
              </ListItem>
            </List>
          )}

          {isLoggedIn && (
            <UserWrapper>
              <p>Welcome {email}</p>
              <button
                onClick={() => dispatch(logout(token))}
                disabled={isLoading}
              >
                Logout
              </button>
            </UserWrapper>
          )}

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
