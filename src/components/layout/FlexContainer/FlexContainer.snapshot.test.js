import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { FlexContainer } from './FlexContainer';
import { theme } from '../../../themes/gentle-jack';

describe('FlexContainer snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <FlexContainer>
          <p>A test child.</p>
          <span>Another test child.</span>
        </FlexContainer>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('component renders with all props set', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <FlexContainer horiztonalAlignment="end" verticalAlignment="bottom">
          <p>A test child.</p>
          <span>Another test child.</span>
        </FlexContainer>
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
