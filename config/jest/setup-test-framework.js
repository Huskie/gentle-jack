import * as emotion from 'emotion';
import { createSerializer, createMatchers } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(createMatchers(emotion));
