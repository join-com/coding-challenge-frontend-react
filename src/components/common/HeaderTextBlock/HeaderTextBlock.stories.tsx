import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { HeaderTextBlock } from './HeaderTextBlock';

const stories = storiesOf('HeaderTextBlock', module);
stories.add('HeaderTextBlock', () => <HeaderTextBlock />);
