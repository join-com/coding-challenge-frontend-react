import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle, ResetStyle } from '../src/shared/components/GlobalStyle';
import React from 'react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(s => (
  <>
    <ResetStyle /> <GlobalStyle />
    {s()}
  </>
));

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
