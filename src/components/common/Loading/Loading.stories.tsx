import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Loading } from './Loading';

const stories = storiesOf('Loading', module);
stories.addDecorator(withKnobs);

stories.add('Loading', () => {
    return (
        <Loading>
            <div>{getKnobs()}</div>
        </Loading>
    );
});

function getKnobs() {
    return text('Loading', 'Loading ...');
}
