import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { IncidentTextBlock } from './IncidentTextBlock';

const stories = storiesOf('IncidentTextBlock', module);
stories.addDecorator(withKnobs);

stories.add('IncidentTextBlock', () => {
    return (
        <IncidentTextBlock
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
