import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { Header, Main, SwitcherWrappepr } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchUser,
  selectIsLoggedIn,
  selectShowModal,
  selectAuthError,
} from 'myRedux';
import { AuthNav, Nav, Switcher, User } from 'components/Appbar';
import { useEffect } from 'react';
import { Modal } from 'components/Modal';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const showModal = useSelector(selectShowModal);
  const error = useSelector(selectAuthError);
  const dispatch = useDispatch();
  if (error) {
    toast.error(error);
  }
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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
      {showModal && <Modal />}
      <ToastContainer />
    </>
  );
};
