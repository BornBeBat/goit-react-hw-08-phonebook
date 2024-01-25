import styled from 'styled-components';

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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  align-items: start;
`;
