import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Layout } from './Layout';

const stories = storiesOf('Layout', module);
stories.addDecorator(withKnobs);

stories.add('Layout', () => {
    return (
        <Layout>
            <div>{getKnobs()}</div>
        </Layout>
    );
});

function getKnobs() {
    return text('Layout', 'Layout test');
}
