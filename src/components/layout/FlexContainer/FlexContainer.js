import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';

const getHorizontalAlignment = (val) => {
  let value = '';
  switch (val) {
    case 'center':
      value = 'center';
      break;
    case 'left':
      value = 'flex-start';
      break;
    case 'right':
      value = 'flex-end';
      break;
    case 'space-between':
      value = 'space-between';
      break;
    default:
      value = 'flex-start';
      break;
  }
  return value;
};

const StyledWrapper = Styled('div')`
  display: flex;
  justify-content: ${props => getHorizontalAlignment(props.horizontalAlignment)};
`;

const FlexContainer = ({ children, horizontalAlignment, verticalAlignment }) => (
  <StyledWrapper
    horizontalAlignment={horizontalAlignment}
    verticalAlignment={verticalAlignment}
  >
    {children}
  </StyledWrapper>
);

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  horizontalAlignment: PropTypes.oneOf(['center', 'left', 'right', 'space-between']),
  verticalAlignment: PropTypes.oneOf(['bottom', 'center', 'top']),
};

FlexContainer.defaultProps = {
  horizontalAlignment: 'left',
  verticalAlignment: 'top',
};

export { FlexContainer };
