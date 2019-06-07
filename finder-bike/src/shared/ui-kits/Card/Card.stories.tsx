import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from './Card';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

storiesOf('UI-Kit', module).add('Card', () => (
  <Card thumbnailURL="https://seeclickfix.com/files/issue_images/0137/6393/img-image_480745259766912201753441_square.jpg">
    <Text size={15} isBold isBlock>
      Sidewalk - Damage
    </Text>
    <Text isBlock>
      5 plus inches of dangerous sidewalk looming in the shadows. Needs a ADA
      ramp built or raise the slab next to it to match. Cannot believe this has
      gone soo long without being addressed. It says Emeryville but the street
      signs are green (Oakland). Just a matter of time before someone loses some
      teeth going over bicycle handle bars or breaks a limb. At least start with
      painting it orange and putting a cone by it.
    </Text>
    <Text isBlock>
      <Icon icon={faMapMarkedAlt} /> Address: 123 Binh Thanh, HCM
    </Text>
    <Text isBlock>
      <Icon icon={faClock} /> Occurred at: 12/12/2017
    </Text>
    <Text isBlock>
      <Icon icon={faClock} /> Updated at: 12/12/2017
    </Text>
  </Card>
));
