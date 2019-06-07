import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from './Alert';

storiesOf('UI-Kit', module).add('Alert', () => (
  <Alert color="primary">Primary Alert</Alert>
));
