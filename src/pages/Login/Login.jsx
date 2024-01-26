import { Title, Forma, Input, Label } from './Login.styled';

export const Login = () => {
  return (
    <>
      <Title>Login</Title>

      <Forma /* onSubmit={handleSubmit} */>
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
        <button type="submit" /* disabled={isLoading} */>Log in</button>
      </Forma>
    </>
  );
};
