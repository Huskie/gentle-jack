import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming';

import { ClientList } from './ClientList';
import { theme } from '../../themes/gentle-jack';

const clients = [
  { name: 'Client A' },
  { name: 'Client B' },
  { name: 'Client C' },
  { name: 'Client X' },
  { name: 'Client Y' },
  { name: 'Client Z' },
];

describe('ClientList snapshots:', () => {
  it('component renders with defaults', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <ClientList clients={clients} />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('component renders with all props set', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <ClientList clients={clients} title="Test title" />
      </ThemeProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
