import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TransitionBlock = ({ children, type }) => (
  <ReactCSSTransitionGroup
    transitionName={type}
    transitionAppear
    transitionAppearTimeout={750}
  >
    {children}
  </ReactCSSTransitionGroup>
);

TransitionBlock.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

TransitionBlock.defaultProps = {
  type: 'fade-in',
};

export { TransitionBlock };
