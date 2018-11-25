import React from 'react';

import {
  ClientList,
  Footer,
  Header,
  Hero,
} from '../../components';

const clients = [
  { name: 'STV' },
  { name: 'Prudential' },
  { name: 'CYBG' },
  { name: 'Hunter' },
  { name: 'Cater Allen' },
];

const heroImage = <img alt="Gentle Jack web software consultancy" src="/assets/illustrations/developer.svg" />;
const heroSummary = 'We build web applications and products for businesses. We are experienced in building high-quality, robust applications for clients in a range of industry sectors.';
const heroTitle = 'Quality code for your ideas';

const Home = () => (
  <div>
    <Header />
    <Hero image={heroImage} summary={heroSummary} title={heroTitle} />
    <ClientList clients={clients} title="Trusted by" />
    <Footer />
  </div>
);

Home.propTypes = {};
Home.defaultProps = {};

export { Home };
