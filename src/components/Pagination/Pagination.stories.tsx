import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Pagination } from './Pagination';

const stories = storiesOf('Pagination', module);

stories.add('Pagination', () => {
    return <Pagination totalPages={18} current={3} changePage={() => {}} />;
});
