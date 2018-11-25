import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

import {
  Container,
  FlexContainer,
  Logo,
  Navigation,
} from '..';

const StyledHeader = styled('header')`
    background: ${props => props.theme.colours.alpha};
    color: ${props => props.theme.colours.delta};
    padding: 1.5rem 0;
`;

const BaseHeader = () => (
  <StyledHeader>
    <Container>
      <FlexContainer horizontalAlignment="space-between">
        <Logo label="Gentle Jack" isLink />
        <Navigation />
      </FlexContainer>
    </Container>
  </StyledHeader>
);

BaseHeader.propTypes = {};

BaseHeader.defaultProps = {};


const Header = withTheme(BaseHeader);

export { Header };
