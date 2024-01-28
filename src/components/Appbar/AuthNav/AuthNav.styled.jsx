import { styled } from 'styled-components';

export const List = styled.ul`
  font-size: 26px;
  display: flex;
  gap: 26px;
`;

export const ListItem = styled.li`
  padding: 8px 18px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.acsent2};
  border: 2px solid ${({ theme }) => theme.colors.acsent1};
  border-radius: 0.8em;
  padding: 0.3em 1em;

  &:hover {
    color: ${({ theme }) => theme.colors.acsent1};

    background-color: ${({ theme }) => theme.colors.acsent2};
    box-shadow: 0px 0px 18px 5px ${({ theme }) => theme.colors.acsent1} inset,
      0px 0px 8px 5px ${({ theme }) => theme.colors.acsent1};
    cursor: pointer;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
