import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useContext, useEffect } from 'react';
import { Layout, ThemeContext } from 'components';
import { Contacts, Home, Login, Register } from 'pages';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { PublicRoute, PrivateRoute } from 'routes';
import { theme } from 'styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, selectIsRefreshing } from 'myRedux';
import { Oval } from 'react-loader-spinner';

export const App = () => {
  const { theme: color } = useContext(ThemeContext);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return isRefreshing ? (
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
