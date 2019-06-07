import { storiesOf } from '@storybook/react';
import React, { useCallback } from 'react';
import FormItem from './Form.Item';
import Form, { IForm } from './Form';
import Input from '../../ui-kits/Input/Input';
import { Button } from '../../ui-kits/Button';

function FormPlayGround(props: IForm) {
  const onSubmit = useCallback(values => {
    console.log('onSubmit', values);
  }, []);

  return (
    <Form onSubmit={onSubmit} inline={props.inline}>
      <FormItem label="Email">
        <Input type="email" name="email" placeholder="Email" />
      </FormItem>
      <FormItem label="Username">
        <Input type="text" name="username" placeholder="Username" />
      </FormItem>
      <FormItem label="Password">
        <Input type="password" name="password" placeholder="Password" />
      </FormItem>
      <FormItem label="From date">
        <Input type="date" name="fromDate" placeholder="From date" />
      </FormItem>
      <FormItem label="End date">
        <Input type="date" name="endDate" placeholder="End date" />
      </FormItem>
      <Button color="primary" type="submit" isFull>
        Login
      </Button>
    </Form>
  );
}

storiesOf('Components/Form', module)
  .add('Playground Inline', () => <FormPlayGround inline />)
  .add('Playground', () => <FormPlayGround />);
