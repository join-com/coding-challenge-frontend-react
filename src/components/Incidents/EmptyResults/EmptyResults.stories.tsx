import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { EmptyResults } from './EmptyResults';

const stories = storiesOf('EmptyResults', module);

stories.add('EmptyResults', () => {
    return <EmptyResults />;
});
