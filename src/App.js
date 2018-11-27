import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import Styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import { Home } from './containers';

const theme = {
  borderRadius: '4px',
  colours: {
    alpha: '#2742b8',
    beta: '#222',
    gamma: '#06f',
    delta: '#fff',
    epsilon: '#1b6cff',
    zeta: '#ffd561',
    eta: '#4048ef',
  },
  gradients: {
    alpha: '#4048ef, #2742b8',
  },
  spacing: {
    componentMargin: '16px',
  },
  sizing: {
    maxWidth: '1080px',
  },
};

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
