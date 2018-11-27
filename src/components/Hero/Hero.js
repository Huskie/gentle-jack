import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

import { Button, Container, TransitionBlock } from '..';

const StyledWrapper = styled('div')`
    background: linear-gradient(${props => props.theme.gradients.alpha});
    box-sizing: border-box;
    color: ${props => props.theme.colours.delta};
    padding: 2rem 0 0 0;
    h1 {
        border-radius: ${props => props.theme.borderRadius};
        font-size: 1.25rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
        @media (min-width: 680px) {
            font-size: 1.625rem;
            margin-bottom: 1rem;
        }
    }
    h2 {
        border-radius: ${props => props.theme.borderRadius};
        display: block;
        font-size: 0.8125rem;
        font-weight: 400;
        line-height: 1.5;
        @media (min-width: 680px) {
            font-size: 1rem;
            max-width: 380px;
        }
    }
    img {
        @media (min-width: 680px) {
            margin-top: -4rem;
            max-width: 400px;
        }
    }
    button {
        background: ${props => props.theme.colours.zeta};
        border: 0;
        border-radius: ${props => props.theme.borderRadius};
        box-sizing: border-box;
        color: ${props => props.theme.colours.alpha};
        cursor: pointer;
        font-weight: 700;
        line-height: 1;
        padding: 0.5rem;
        text-transform: uppercase;
        -webkit-appearance: none;
    }
    .fade-in-appear {
        opacity: 0;
    }  
    .fade-in-appear-active {
        opacity: 1;
        transition: opacity 0.75s ease-in;
    }
`;

const StyledFlexContainer = styled('div')`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
`;

const StyledContentColumn = styled('div')`
    flex: 1;
    flex-basis: 100%;
    @media (min-width: 480px) {
        flex-basis: 50%;
    }
`;

const StyledImageColumn = styled('div')`
    flex: 1;
    flex-basis: 100%;
    @media (min-width: 480px) {
        flex-basis: 50%;
    }
`;

const BaseHero = ({
  buttonLabel, image, summary, title,
}) => (
  <StyledWrapper>
    <Container>
      <StyledFlexContainer>
        <StyledContentColumn>
          <TransitionBlock>
            <h1>{title}</h1>
            <h2>{summary}</h2>
            {buttonLabel && <Button label={buttonLabel} />}
          </TransitionBlock>
        </StyledContentColumn>
        <StyledImageColumn>
          <TransitionBlock>
            {image}
          </TransitionBlock>
        </StyledImageColumn>
      </StyledFlexContainer>
    </Container>
  </StyledWrapper>
);

BaseHero.propTypes = {
  buttonLabel: PropTypes.node,
  image: PropTypes.node,
  summary: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BaseHero.defaultProps = {
  buttonLabel: '',
  image: null,
  summary: '',
};

const Hero = withTheme(BaseHero);

export { Hero };
