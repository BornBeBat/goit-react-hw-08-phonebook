import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContactForm, ContactList, Filter } from 'components';
import { AppContainer, MainTitle, SecondaryTitle } from './Contacts.styled';
import { addContact, selectToken } from 'myRedux';

export const Contacts = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

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
