import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { Header, Main, SwitcherWrappepr } from './Layout.styled';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsLoggedIn, selectShowModal } from 'myRedux';
import { AuthNav, Nav, Switcher, User } from 'components/Appbar';
import { Modal } from 'components/Modal';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';

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
        <Suspense
          fallback={
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{
                display: 'flex',
                width: '98vw',
                height: '95vh',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              s
            />
          }
        >
          <Outlet />
        </Suspense>
      </Main>
      {showModal && <Modal />}
      <ToastContainer />
    </>
  );
};
