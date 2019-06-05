import { storiesOf } from '@storybook/react';
import React from 'react';
import Loading from "./Loading"

storiesOf("UI-Kit/Loading", module)
  .add("default", () => (
    <Loading />
  ))
  .add("with center", () => (
    <Loading center />
  ))