import React from 'react';
import styled from 'react-emotion';

const StyledWrapper = styled('nav')`
  display: none;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
`;

const Navigation = () => (
  <StyledWrapper>
    <ul>
      <li>About</li>
    </ul>
  </StyledWrapper>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export { Navigation };
