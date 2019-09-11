import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { IncidentImage } from './IncidentImage';

const stories = storiesOf('IncidentImage', module);
stories.addDecorator(withKnobs);

stories.add('IncidentImage', () => {
    return <IncidentImage imageUrl={getSrcKnobs()} />;
});

function getSrcKnobs() {
    return text(
        'Source',
        'https://avatars.mds.yandex.net/get-turbo/1505928/2a0000016836daee3ee7d60c44cca211b89b/max_g480_c12_r3x4_pd20',
    );
}
