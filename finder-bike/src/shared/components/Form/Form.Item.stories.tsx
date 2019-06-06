import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import FormItem from './Form.Item';
import Form from './Form';
import Input from '../../ui-kits/Input/Input';

storiesOf('Components/Form', module)
  .add('Form Item', () => (
    <Form onSubmit={action('onSubmit')}>
      <FormItem label="UserName">
        <Input type="text" name="username" onChange={action('text onChange')} />
      </FormItem>
    </Form>
  ))
  .add('Form Item Inline', () => (
    <Form onSubmit={action('onSubmit')} inline>
      <FormItem label="UserName">
        <Input type="text" name="username" onChange={action('text onChange')} />
      </FormItem>
    </Form>
  ));
