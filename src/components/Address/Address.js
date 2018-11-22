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

BaseAddress.defaultProps = {};

BaseAddress.propTypes = {
    children: PropTypes.node
};

const Address = withTheme(BaseAddress);

export { Address };