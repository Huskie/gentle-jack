import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import Styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import { Home } from './containers';
import { theme } from './themes/gentle-jack';

// eslint-disable-next-line
injectGlobal`
    body {
        margin: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1em 0;
    }
`;

const StyledWrapper = Styled('div')`
    background: ${theme.colours.beta};
    font-family: proxima-nova, sans-serif;
    line-height: 1.4;
    min-height: 100vh;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    a {
        color: #fa4e40;
    }
`;

const App = () => (
  <StyledWrapper>
    <Home />
  </StyledWrapper>
);

App.propTypes = {};

App.defaultProps = {};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app'), // eslint-disable-line
);
