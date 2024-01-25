import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
p {
  padding: 0;
  margin: 0;
}
ul,
ol {
  list-style: none;
  padding: 0;
}
button {
  font-size: inherit;
  font-style: inherit;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.acsent2};
  border: 2px solid ${({ theme }) => theme.colors.acsent1};
  border-radius: 0.8em;
  padding: 0.3em 1em;
  &:disabled{
font-size: inherit;
  font-style: inherit;
    border-radius: 0.8em;
  padding: 0.3em 1em;
  background-color: grey;
  border-color: grey;
  color:#0000008c;
  }
  &:not(:disabled):hover {
  color: ${({ theme }) => theme.colors.acsent1};

    background-color: ${({ theme }) => theme.colors.acsent2};
    box-shadow: 0px 0px 18px 5px ${({ theme }) => theme.colors.acsent1} inset,
      0px 0px 8px 5px ${({ theme }) => theme.colors.acsent1};
    cursor: pointer;
  }
}`;
