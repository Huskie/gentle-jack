import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { Navigation } from './Navigation';
import { theme } from '../../themes/gentle-jack';

describe('Navigation snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
