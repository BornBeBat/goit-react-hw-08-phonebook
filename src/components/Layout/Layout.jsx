import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsLoggedIn, selectShowModal, updateContact } from 'myRedux';
import { AuthNav, Nav, Switcher, User } from 'components/Appbar';
import { Modal } from 'components/Modal';
import { ContactForm, Loader } from 'components';

import { Header, Main, SwitcherWrappepr } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const showModal = useSelector(selectShowModal);

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
        <Suspense fallback={<Loader loaderType="isRefreshing" />}>
          <Outlet />
        </Suspense>
      </Main>
      {showModal && (
        <Modal>
          <ContactForm button={'edit contact'} action={updateContact} />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};
