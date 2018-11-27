import React from 'react';
import renderer from 'react-test-renderer';

expect.addSnapshotSerializer(createSerializer(emotion));

import { Address } from './Address';

describe('Address snapshots', () => {
  it('component renders correctly', () => {
    const tree = renderer.create(
      <Address>
        <span>Registered office address:</span>
        <span>272 Bath Street</span>
        <span>Glasgow, G2 4JR</span>
      </Address>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
