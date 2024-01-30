import { addContact } from 'myRedux';

import { ContactForm, ContactList, Filter } from 'components';

import { AppContainer, MainTitle, SecondaryTitle } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <AppContainer>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm button={'Add contact'} action={addContact} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </AppContainer>
    </>
  );
};

export default Contacts;
