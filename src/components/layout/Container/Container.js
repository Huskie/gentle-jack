import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';

const StyledContainer = Styled('div')`
    margin: 0 auto;
    max-width: ${props => props.theme.sizing.maxWidth};
    padding: 0 24px;
`;

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

Container.propTypes = {
    children: PropTypes.node
};

Container.defaultProps = {};

export { Container };
