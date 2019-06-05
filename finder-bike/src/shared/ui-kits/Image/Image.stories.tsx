import { storiesOf } from '@storybook/react';
import React from 'react';
import Image from "./Image"

storiesOf("UI-Kit/Image", module)
  .add("with src", () => (
    <Image src="https://seeclickfix.com/files/issue_images/0137/6393/img-image_480745259766912201753441.jpg" />
  ))