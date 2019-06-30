import requireContext from 'require-context.macro';
import { configure, addDecorator } from '@storybook/react';

import { withIntl } from './decorators';

function loadStories() {
  // automatically import all story js files that end with *.stories.js
  const req = requireContext('../', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withIntl)

configure(loadStories, module);
