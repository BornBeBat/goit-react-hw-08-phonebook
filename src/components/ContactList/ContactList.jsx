import { Item, List, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { filterArray } from 'utils';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectError,
} from 'myRedux/selectors';
import { deleteContact, fetchContacts } from 'myRedux/operations';
import { Error } from 'components';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
