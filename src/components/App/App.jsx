import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { Layout, ThemeContext } from 'components';
import { Contacts, Home, Login, Register } from 'pages';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { PublicRoute, PrivateRoute } from 'routes';
import { theme } from 'styles/theme';

export const App = () => {
  const { theme: color } = useContext(ThemeContext);

  return (
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
