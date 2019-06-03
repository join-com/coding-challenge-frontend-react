import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Search } from './Search';

const stories = storiesOf('Search', module);
stories.addDecorator(withKnobs);

stories.add('Search', () => {
    return <Search submit={() => {}} />;
});
