import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { SearchPanel } from './SearchPanel';

const stories = storiesOf('SearchPanel', module);
stories.addDecorator(withKnobs);

stories.add('SearchPanel', () => {
    return <SearchPanel submit={() => {}} />;
});
