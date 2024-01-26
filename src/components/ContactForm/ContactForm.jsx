import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forma, Input, Label } from './ContactForm.styled';
import { selectContacts, selectIsLoading, addContact } from 'myRedux';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
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
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
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
          Phone
          <Input
            type="tel"
            name="phone"
            value={phone}
            required
            onChange={handleChange}
          />
        </Label>
        <button type="submit" disabled={isLoading}>
          Add contact
        </button>
      </Forma>
    </>
  );
};
