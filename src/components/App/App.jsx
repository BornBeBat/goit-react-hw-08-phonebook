import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from 'styles/theme';
import { Layout } from 'components';
import { Contacts, Home, Login, Register } from 'pages';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { selectTheme } from 'myRedux';

export const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
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
