import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter } from '@storybook/addon-storyshots';
import toJSON from 'enzyme-to-json';

initStoryshots({
  configPath: './src/.storybook',
  framework: 'react',
  shallowSnapshot: true,
  serializer: toJSON,
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: './__tests__/__snapshots__',
    snapshotExtension: '.snap',
  }),
});
