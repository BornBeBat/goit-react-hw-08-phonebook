import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Title, Forma, Input, Label } from './Login.styled';
import { login } from 'myRedux';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <Title>Login</Title>

      <Forma onSubmit={handleSubmit}>
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
          />
        </Label>
        <button type="submit">Log in</button>
      </Forma>
    </>
  );
};
