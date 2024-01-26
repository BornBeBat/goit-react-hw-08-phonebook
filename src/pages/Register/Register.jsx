import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Title, Forma, Input, Label } from './Register.styled';
import { register, selectIsLoggedIn } from 'myRedux';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const userIsLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (userIsLoggedIn) {
      navigate('/contacts');
    }
  }, [userIsLoggedIn, navigate]);

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
