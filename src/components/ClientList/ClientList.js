import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';

import { Container } from '../';

const StyledWrapper = styled('div')`
    background: #06f;
    color: ${props => props.theme.colours.delta};
    box-sizing: border-box;
    display: none;
    padding: 2rem 0;
    h2 {
        font-size: 1.125rem;
        letter-spacing: 1px;
        text-align: center;
        text-transform: uppercase;
    }
`;

const StyledList = styled('div')`
    display: flex;
    span {
        flex: 1;
    }
`;

const BaseClientList = ({ clients, title }) => (
    <StyledWrapper>
        <Container>
            {title && <h2>{title}</h2>}
            <StyledList>
                {clients.map(({ name }) => <span key={name}>{name}</span>)}
            </StyledList>
        </Container>
    </StyledWrapper>
);

BaseClientList.propTypes = {
    clients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    })).isRequired,
    title: PropTypes.string
};

BaseClientList.defaultProps = {};

const ClientList = withTheme(BaseClientList);

export { ClientList };