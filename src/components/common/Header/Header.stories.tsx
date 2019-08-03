import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';

import { Header } from './Header';

const stories = storiesOf('Header', module);

stories.addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
stories.add('Header', () => <Header />);
