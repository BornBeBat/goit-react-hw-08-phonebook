import { useDispatch, useSelector } from 'react-redux';
import { lazy, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { toast } from 'react-toastify';

import { PublicRoute, PrivateRoute } from 'routes';
import { Layout, Loader, ThemeContext } from 'components';

import { fetchUser, selectAuthError, selectIsRefreshing } from 'myRedux';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/CreateGlobalStyle';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const { theme: color } = useContext(ThemeContext);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return isRefreshing ? (
    <Loader loaderType="oval" />
  ) : (
    <ThemeProvider theme={theme[color]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />{' '}
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};
