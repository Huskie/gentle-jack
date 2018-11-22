import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import Styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

const theme = {
    colours: {
        primary: '#0038e3',
        secondary: '#222',
    },
    spacing: {
        componentMargin: '16px',
    },
    sizing: {
        maxWidth: '1080px',
    }
};

injectGlobal`
    body {
        margin: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1em 0;
    }
`

const StyledWrapper = Styled('div')`
    font-family: proxima-nova, sans-serif;
    line-height: 1.4;
    min-height: 100vh;
    min-width: 320px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
`;

import { Home } from './containers';

const App = () => (
    <StyledWrapper>
        <Home />
    </StyledWrapper>
);

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('app')
);
