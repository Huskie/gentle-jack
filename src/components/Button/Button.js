import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

const BaseButton = ({ label }) => <button type="button">{label}</button>;

BaseButton.defaultProps = {};

BaseButton.propTypes = {
  label: PropTypes.string.isRequired,
};

const Button = withTheme(BaseButton);

export { Button };
