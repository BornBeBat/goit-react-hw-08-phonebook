import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  font-size: 1em;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.background};
  width: 90vw;
  min-height: 90vh;
  margin: 80px auto;
  border-radius: 1em;
  border: 0.2em solid ${({ theme }) => theme.colors.acsent1};
  box-shadow: 0px 0px 18px 5px ${({ theme }) => theme.colors.acsent2} inset,
    0px 0px 8px 5px ${({ theme }) => theme.colors.acsent1};
  margin: 0 auto;
  & .MuiSwitch-root {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`;
export const MainTitle = styled.h1`
  font-size: 1.7em;
  margin-bottom: 0.7em;
  text-shadow: 5px 5px 6px ${({ theme }) => theme.colors.acsent2};
`;

export const SecondaryTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  text-shadow: 5px 5px 6px ${({ theme }) => theme.colors.acsent2};
`;
