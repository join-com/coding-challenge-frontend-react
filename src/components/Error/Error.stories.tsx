import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Error } from './Error';

const stories = storiesOf('Error', module);
stories.addDecorator(withKnobs);

stories.add('Error', () => {
    return (
        <Error>
            <div>{getKnobs()}</div>
        </Error>
    );
});

function getKnobs() {
    return text('Error', 'Ooops, something wrong)');
}
