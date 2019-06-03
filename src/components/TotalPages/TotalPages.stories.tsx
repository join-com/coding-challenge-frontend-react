import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TotalPages } from './TotalPages';

const stories = storiesOf('TotalPages', module);

stories.add('TotalPages', () => {
    return <TotalPages totalPages={18} />;
});
