import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectError,
  deleteContact,
  fetchContacts,
  addId,
  togleModal,
} from 'myRedux';
import { Error, Loader } from 'components';
import { filterArray } from 'utils';
import { Item, List, Text } from './ContactList.styled';

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

  const handleOpenModal = id => {
    dispatch(addId(id));
    dispatch(togleModal());
  };

  return (
    <>
      {error && <Error />}
      {isLoading && <Loader loaderType="audio" />}
      {!isLoading && (
        <List>
          {filteredContacts.map(({ name, id, number }) => (
            <Item key={id}>
              <Text>Name: {name}</Text>
              <Text>Number: {number}</Text>
              <div>
                <button onClick={() => handleOpenModal(id)}>Edit</button>
                <button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </div>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
