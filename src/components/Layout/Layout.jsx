import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { Header, Main, SwitcherWrappepr } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'myRedux';
import { AuthNav, Nav, Switcher, User } from 'components/Appbar';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header>
        <Toolbar position="relative">
          <Nav />
          {!isLoggedIn && <AuthNav />}
          {isLoggedIn && <User />}
          <SwitcherWrappepr>
            <Switcher />
          </SwitcherWrappepr>
        </Toolbar>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
