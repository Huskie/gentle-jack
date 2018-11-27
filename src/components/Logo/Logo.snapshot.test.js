import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { Logo } from './Logo';
import { theme } from '../../themes/gentle-jack';

describe('Logo snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Logo label="A test label" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('component renders with all props set', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Logo isLink label="A test label" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
