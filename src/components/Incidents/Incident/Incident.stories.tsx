import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { Incident } from './Incident';

import 'reset.css';
import 'App.css';

const stories = storiesOf('Incident', module);
stories.addDecorator(withKnobs);
stories.addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
stories.add('Incident', () => {
    return (
        <Incident
            id={1}
            title={getTitleKnobs()}
            description={getDescriptionKnobs()}
            occurredAt={getAtKnobs()}
            address={getAddressKnobs()}
            imageUrlThumb={getSrcKnobs()}
        />
    );
});

function getTitleKnobs() {
    return text('Header', 'Stolen 2018 VAUN VELO(black)');
}

function getDescriptionKnobs() {
    return text('Description', 'Stolen from my courtyard');
}

function getAtKnobs() {
    return number('OccurredAt', 1532152800);
}

function getAddressKnobs() {
    return text('Address', 'Berlin, 12047, DE');
}

function getSrcKnobs() {
    return text(
        'Source',
        'https://avatars.mds.yandex.net/get-turbo/1505928/2a0000016836daee3ee7d60c44cca211b89b/max_g480_c12_r3x4_pd20',
    );
}
