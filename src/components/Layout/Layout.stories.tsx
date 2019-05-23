import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Layout } from './Layout';

storiesOf('Layout', module).add('Layout', () => (
    <Layout>
        <div>Layout test</div>
    </Layout>
));
