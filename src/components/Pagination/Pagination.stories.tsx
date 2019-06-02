import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Pagination } from './Pagination';

const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

stories.add('Pagination', () => {
    return <Pagination totalPages={getKnobsTotalPages()} currentPage={getKnobsCurrentPage()} changePage={() => {}} />;
});

function getKnobsTotalPages() {
    return number('Total pages', 15);
}

function getKnobsCurrentPage() {
    return number('Current page', 7);
}
