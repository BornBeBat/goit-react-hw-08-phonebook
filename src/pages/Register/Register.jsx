import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'myRedux';

import { Title, Forma, Input, Label } from './Register.styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Title>Register</Title>
      <Forma onSubmit={handleSubmit}>
        <Label>
          Login
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Email address
          <Input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            minLength={7}
          />
        </Label>
        <button type="submit">Register</button>
      </Forma>
    </>
  );
};

export default Register;
