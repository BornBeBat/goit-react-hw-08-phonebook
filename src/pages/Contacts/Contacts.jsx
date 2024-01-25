import { ContactForm, ContactList, Filter } from 'components';
import { AppContainer, MainTitle, SecondaryTitle } from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <AppContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </AppContainer>
    </>
  );
};
