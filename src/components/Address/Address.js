import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const StyledAddress = Styled('div')`
    margin-bottom: ${props => props.theme.spacing.componentMargin};
    span {
        display: block;
    }
`;

const BaseAddress = ({ children }) => <StyledAddress>{children}</StyledAddress>;

BaseAddress.propTypes = {
    children: PropTypes.node
};

BaseAddress.defaultProps = {};

const Address = withTheme(BaseAddress);

export { Address };