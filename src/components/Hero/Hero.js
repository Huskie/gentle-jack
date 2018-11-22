import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const Wrapper = Styled('div')`
    background: ${props => props.theme.colours.primary};
    box-sizing: border-box;
    color: #fff;
    min-height: 100vh;
    padding: 3rem 0;
    text-align: center;
`;

const BaseHero = ({ children }) => <Wrapper>{children}</Wrapper>;

BaseHero.propTypes = {
    children: PropTypes.node.isRequired
}

BaseHero.defaultProps = {};

const Hero = withTheme(BaseHero);

export { Hero };
