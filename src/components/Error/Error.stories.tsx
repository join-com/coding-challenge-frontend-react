import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Error } from './Error';

const stories = storiesOf('Error', module);

stories.add('Error', () => {
    return <Error />;
});
