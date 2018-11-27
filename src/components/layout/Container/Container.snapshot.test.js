import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { Container } from './Container';
import { theme } from '../../../themes/gentle-jack';

describe('Container snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Container>
          <p>A test child.</p>
          <span>Another test child.</span>
        </Container>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
