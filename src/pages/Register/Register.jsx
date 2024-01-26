import { Title, Forma, Input, Label } from './Register.styled';
export const Register = () => {
  return (
    <>
      <Title>Register</Title>
      <Forma /* onSubmit={handleSubmit} */>
        <Label>
          Login
          <Input
            type="text"
            name="login"
            // value={name}
            required
            // onChange={handleChange}
          />
        </Label>
        <Label>
          Email address
          <Input
            type="mail"
            name="mail"
            // value={name}
            required
            // onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            // value={phone}
            required
            // onChange={handleChange}
          />
        </Label>
        <button type="submit" /* disabled={isLoading} */>Register</button>
      </Forma>
    </>
  );
};
