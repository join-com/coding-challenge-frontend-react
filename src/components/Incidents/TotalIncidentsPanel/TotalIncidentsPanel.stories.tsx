import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { TotalIncidentsPanel } from './TotalIncidentsPanel';

const stories = storiesOf('TotalIncidentsPanel', module);
stories.addDecorator(withKnobs);

stories.add('TotalIncidentsPanel', () => {
    return <TotalIncidentsPanel totalIncidents={getKnobsTotalIncidents()} />;
});

function getKnobsTotalIncidents() {
    return number('Total incidents', 18);
}
