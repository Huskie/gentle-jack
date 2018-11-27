import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { Address } from './Address';
import { theme } from '../../themes/gentle-jack';

describe('Address snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Address>
          <span>Registered office address:</span>
          <span>272 Bath Street</span>
          <span>Glasgow, G2 4JR</span>
        </Address>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
