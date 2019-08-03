import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Map } from './Map';

const stories = storiesOf('Map', module);
stories.addDecorator(withKnobs);

stories.add('Map', () => {
    return <Map coordinates={{ lng: getKnobsLng(), lat: getKnobsLat() }} />;
});

function getKnobsLng() {
    return number('lng', 13.4275004);
}

function getKnobsLat() {
    return number('lat', 52.4890809);
}
