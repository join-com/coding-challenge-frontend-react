import { configure, addDecorator } from '@storybook/react';
import {
  GlobalStyle,
  ResetStyle,
  SStyle
} from '../src/shared/components/GlobalStyle';
import { withInfo } from '@storybook/addon-info';
import React from 'react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(withKnobs);
addDecorator(withInfo({ inline: true, header: false }));

addDecorator(s => (
  <>
    <ResetStyle /> <GlobalStyle /> <SStyle />
    {s()}
  </>
));

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
