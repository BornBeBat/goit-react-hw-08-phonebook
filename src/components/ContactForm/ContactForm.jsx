import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forma, Input, Label } from './ContactForm.styled';
import {
  clearId,
  selectContacts,
  selectIsLoading,
  selectModalId,
  togleModal,
} from 'myRedux';

export const ContactForm = ({ button, action }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const id = useSelector(selectModalId);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (id) {
      dispatch(action({ name, number, id }));
      dispatch(togleModal());
      dispatch(clearId());
    } else {
      dispatch(action({ name, number }));
    }

    setName('');
    setNumber('');
  };
  return (
    <>
      <Forma onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleChange}
          />
        </Label>
        <button type="submit" disabled={isLoading}>
          {button}
        </button>
      </Forma>
    </>
  );
};
