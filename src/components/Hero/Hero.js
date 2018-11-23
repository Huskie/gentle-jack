import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

const StyledWrapper = styled('div')`
    background: ${props => props.theme.colours.alpha};
    box-sizing: border-box;
    color: ${props => props.theme.colours.delta};
    padding: 3rem 0 10rem 0;
    text-align: center;
    h1 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        @media (min-width: 768px) {
            font-size: 2.625rem;
        }
    }
    h2 {
        font-size: 1rem;
        font-weight: 400;
        @media (min-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

const StyledContainer = styled('div')`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 680px;
    padding: 0 5%;
`;

const BaseHero = ({ children }) => (
    <StyledWrapper>
        <StyledContainer>
            {children}
        </StyledContainer>
    </StyledWrapper>
);

BaseHero.propTypes = {
    children: PropTypes.node.isRequired
}

BaseHero.defaultProps = {};

const Hero = withTheme(BaseHero);

export { Hero };
