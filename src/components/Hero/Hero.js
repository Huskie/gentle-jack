import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';

const Wrapper = Styled('div')`
    color: #fff;
    padding: 3rem 0;
    text-align: center;
`;

const Hero = ({ children }) => <Wrapper>{children}</Wrapper>;

Hero.propTypes = {
    children: PropTypes.node.isRequired
}

Hero.defaultProps = {};

export { Hero };
