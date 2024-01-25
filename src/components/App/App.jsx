import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { Layout } from 'components';
import { Contacts, Home, Login, Register } from 'pages';
import { GlobalStyle } from 'styles/CreateGlobalStyle';

export const App = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Routes>
        <Route
          path="/"
          element={<Layout changeTheme={changeTheme} theme={theme} />}
        >
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};
