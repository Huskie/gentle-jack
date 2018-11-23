import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

import { Address, Container, KeyValuePair } from '../';

const StyledFooter = Styled('footer')`
    background: ${props => props.theme.colours.beta};
    color: #aaa;
    padding: 2rem 0;
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
            <KeyValuePair theKey="VAT registration number" value="XXXXXXX" />
        </Container>
    </StyledFooter>
);

const Footer = withTheme(BaseFooter);

Footer.propTypes = {};

Footer.defaultProps = {};

export { Footer };