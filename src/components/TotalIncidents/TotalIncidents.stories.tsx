import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { TotalIncidents } from './TotalIncidents';

const stories = storiesOf('TotalIncidents', module);
stories.addDecorator(withKnobs);

stories.add('TotalIncidents', () => {
    return <TotalIncidents totalIncidents={getKnobsTotalIncidents()} />;
});

function getKnobsTotalIncidents() {
    return number('Total incidents', 18);
}
