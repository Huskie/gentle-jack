import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { KeyValuePair } from './KeyValuePair';
import { theme } from '../../themes/gentle-jack';

describe('KeyValuePair snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <KeyValuePair theKey="A test key" value="A test value" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
