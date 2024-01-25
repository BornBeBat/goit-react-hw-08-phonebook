import { Item, List, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { filterArray } from 'utils';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'myRedux/selectors';
import { deleteContact, fetchContacts } from 'myRedux/operations';
import { Error } from 'components';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filteredContacts = filterArray(contacts, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <Error />}
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {!isLoading && (
        <List>
          {filteredContacts.map(({ name, id, phone }) => (
            <Item key={id}>
              <Text>Name: {name}</Text>
              <Text>Phone: {phone}</Text>
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
