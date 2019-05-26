import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Incidents } from './Incidents';

const stories = storiesOf('Incidents', module);

stories.add('Incidents', () => {
    return <Incidents incidents={[]} />;
});
