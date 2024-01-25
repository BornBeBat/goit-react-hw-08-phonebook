import { AppContainer, MainTitle, SecondaryTitle } from './App.styled';
import { ContactForm, ContactList, Filter } from 'components';
import { Switch } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { useState } from 'react';
import { GlobalStyle } from 'styles/CreateGlobalStyle';

export const App = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <AppContainer>
        <Switch onChange={changeTheme} />
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};
