import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button } from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Button', () => {
    return <Button onClick={() => {}}>{getKnobs()}</Button>;
});

function getKnobs() {
    return text('Text', 'Next page');
}
