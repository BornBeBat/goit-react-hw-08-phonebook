import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: start;
  margin-bottom: 1.2em;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

export const Input = styled.input`
  padding: 0.4em 1em;
  border-radius: 0.6em;
  border: none;
  outline: 0.1em solid ${({ theme }) => theme.colors.acsent1};
  &:focus {
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.acsent2} inset,
      0px 0px 10px 1px ${({ theme }) => theme.colors.acsent2};
  }
`;
