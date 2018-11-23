import React from 'react';
import PropTypes from 'prop-types';

import { ClientList, Container, Footer, Header, Hero } from '../../components';

const clients = [
    { name: 'STV' },
    { name: 'Prudential' },
    { name: 'CYBG' },
    { name: 'Hunter' },
    { name: 'Cater Allen' }
];

const Home = () => (
    <div>
        <Header />
        <Hero>
            <h1>Quality code for your ideas</h1>
            <h2>We build digital projects for businesses</h2>
        </Hero>
        <ClientList clients={clients} title="Trusted by" />
        <Footer />
    </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export { Home };
