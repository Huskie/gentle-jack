import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    body {
        background: #0038e3;
        font-family: Lato, sans-serif;
        margin: 0;
        min-height: 100vh;
        min-width: 320px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0 0 1em 0;
    }
`

import { Home } from './containers';

const App = () => (
    <div>
        <Home />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
