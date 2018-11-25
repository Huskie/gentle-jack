import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const StyledWrapper = styled('div')`
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colours.delta};
    text-decoration: none;
  }
`;

const BaseLogo = ({ label, isLink }) => (
  <StyledWrapper>
    {isLink ? <a href="/" title={label}>{label}</a> : <span>{label}</span>}
  </StyledWrapper>
);

BaseLogo.defaultProps = {
  isLink: false,
};

BaseLogo.propTypes = {
  label: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
};

const Logo = withTheme(BaseLogo);

export { Logo };
