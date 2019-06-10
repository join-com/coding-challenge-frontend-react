import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

storiesOf('UI-Kit/Input', module)
  .add('basic', () => <Input onChange={action('onChange')} />)
  .add('with place Holder', () => (
    <Input onChange={action('onChange')} placeholder="For example" />
  ))
  .add('with label', () => (
    <Input onChange={action('onChange')} label="Your name" placeholder="John" />
  ))
  .add('with icon', () => (
    <Input
      icon={faCalendarAlt}
      onChange={action('onChange')}
      label="Your name"
      placeholder="John"
    />
  ))
  .add('with type property', () => (
    <Input
      type="date"
      icon={faCalendarAlt}
      onChange={action('onChange')}
      label="Your date"
      placeholder="Your date"
    />
  ));
