import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from './Text';

storiesOf('UI-Kit/Text', module)
  .add('default', () => <Text>Hello Button</Text>)
  .add('with color', () => <Text color="success">Blue</Text>)
  .add('with bold', () => <Text isBold>Bolded</Text>)
  .add('with link', () => (
    <Text color="primary" href="http://abc.abc">
      http://abc.abc
    </Text>
  ));
