import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Input } from './Input';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories.add('Input', () => {
    return <Input value={getTextKnobs()} placeholder={getPlaceholderKnobs()} />;
});

function getTextKnobs() {
    return text('Text', '');
}

function getPlaceholderKnobs() {
    return text('Placeholder', 'Enter your first name');
}
