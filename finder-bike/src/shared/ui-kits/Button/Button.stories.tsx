import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "./Button"

storiesOf("UI-Kit/Button", module)
  .add("with primary", () => (
    <Button color="primary">Hello Button</Button>
  ))
  .add("with danger", () => (
    <Button color="danger">Danger</Button>
  ))
  .add("with success", () => (
    <Button color="success">Success</Button>
  ))
  .add("with warning", () => (
    <Button color="warning">Warning</Button>
  ))
  .add("with onClick event", () => (
    <Button color="primary" onClick={action('clicked')}>Click me!</Button>
  ));