import React from 'react';
import Styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

import { Address, Container, KeyValuePair } from '..';

const StyledFooter = Styled('footer')`
    color: #aaa;
    font-size: 0.8125rem;
    padding: 2rem 0;
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const BaseFooter = () => (
  <StyledFooter>
    <Container>
      <Address>
        <span>Registered office address:</span>
        <span>272 Bath Street</span>
        <span>Glasgow, G2 4JR</span>
      </Address>
      <KeyValuePair theKey="Company number" value="SC588866" />
      <KeyValuePair theKey="VAT registration number" value="288078750" />
    </Container>
  </StyledFooter>
);

const Footer = withTheme(BaseFooter);

Footer.propTypes = {};

Footer.defaultProps = {};

export { Footer };
