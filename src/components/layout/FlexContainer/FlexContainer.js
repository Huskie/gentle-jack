import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-emotion';

const getHorizontalAlignment = val => {
    switch (val) {
        case 'center':
            return 'center';
            break;
        case 'left':
            return 'flex-start';
            break;
        case 'right':
            return 'flex-end';
            break;
        case 'space-between':
            return 'space-between';
            break;
    }
}

const StyledWrapper = Styled('div')`
    display: flex;
    justify-content: ${props => getHorizontalAlignment(props.horizontalAlignment)};
`;

const FlexContainer = ({ children, horizontalAlignment, verticalAlignment }) => (
    <StyledWrapper horizontalAlignment={horizontalAlignment} verticalAlignment={verticalAlignment}>{children}</StyledWrapper>
);

FlexContainer.propTypes = {
    children: PropTypes.node.isRequired,
    horizontalAlignment: PropTypes.oneOf(['center', 'left', 'right', 'space-between']),
    verticalAlignment: PropTypes.oneOf(['bottom', 'center', 'top'])
}

FlexContainer.defaultProps = {
    horizontalAlignment: 'left',
    verticalAlignment: 'top'
};

export { FlexContainer };
