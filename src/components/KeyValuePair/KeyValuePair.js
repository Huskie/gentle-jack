import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';

const StyledWrapper = Styled('div')`

`;

const StyledKey = Styled('span')`
    font-weight: 700;
    margin-right: 0.25rem;
`;

const KeyValuePair = ({ theKey, value }) => (
  <StyledWrapper>
    <StyledKey>
      {theKey}
:
    </StyledKey>
    <span>{value}</span>
  </StyledWrapper>
);

KeyValuePair.propTypes = {
  theKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

KeyValuePair.defaultProps = {};

export { KeyValuePair };
