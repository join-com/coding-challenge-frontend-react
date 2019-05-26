import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { IncidentTextPanel } from './IncidentTextPanel';

const stories = storiesOf('IncidentTextPanel', module);
stories.addDecorator(withKnobs);

stories.add('IncidentTextPanel', () => {
    return (
        <IncidentTextPanel
            title={getTitleKnobs()}
            description={getDescriptionKnobs()}
            occurredAt={1532152800}
            address={getAddressKnobs()}
        />
    );
});

function getTitleKnobs() {
    return text('Header', 'Stolen 2018 VAUN VELO(black)');
}

function getDescriptionKnobs() {
    return text('Description', 'Stolen from my courtyard');
}

function getAddressKnobs() {
    return text('Address', 'Berlin, 12047, DE');
}
