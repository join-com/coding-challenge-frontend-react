import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import { Incidents } from './Incidents';
import { incidents } from './__mocks__/incidents';

const stories = storiesOf('Incidents', module);
stories.addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

stories.add('Incidents', () => {
    return <Incidents incidents={incidents} />;
});
