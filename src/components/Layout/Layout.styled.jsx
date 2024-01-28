import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 18px 5px ${({ theme }) => theme.colors.acsent2} inset,
    0px 0px 8px 5px ${({ theme }) => theme.colors.acsent1};
  margin-block-end: 14px;
  & .MuiToolbar-root {
    justify-content: space-between;
    padding-inline-end: 146px;
  }
  & .MuiSwitch-thumb {
    background-color: ${({ theme }) => theme.colors.acsent2};
  }

  & .Mui-checked .MuiSwitch-thumb {
    background-color: ${({ theme }) => theme.colors.acsent1};
  }
`;

export const SwitcherWrappepr = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 26px;
  font-size: 1.1rem;
`;

export const Main = styled.main`
  padding: 12px;
`;
