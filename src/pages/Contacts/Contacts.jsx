import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContactForm, ContactList, Filter } from 'components';
import { AppContainer, MainTitle, SecondaryTitle } from './Contacts.styled';
import { selectToken } from 'myRedux';

export const Contacts = () => {
  const navigate = useNavigate();
  const userIsInactive = useSelector(selectToken);

  useEffect(() => {
    if (!userIsInactive) {
      navigate('/');
    }
  }, [userIsInactive, navigate]);

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
