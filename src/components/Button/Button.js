import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const BaseButton = ({ label }) => <button>{label}</button>;

BaseButton.defaultProps = {};

BaseButton.propTypes = {
    label: PropTypes.string
};

const Button = withTheme(BaseButton);

export { Button };
