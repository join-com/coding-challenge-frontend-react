import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle, SStyle } from '../src/shared/components/GlobalStyle';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';

import React from 'react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(withInfo({ inline: true, header: false }));

addDecorator(s => (
  <>
    <GlobalStyle />
    <SStyle />
    {s()}
  </>
));

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
