import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from './Icon';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

storiesOf('UI-Kit', module).add('Icon', () => (
  <>
    <Icon icon={faCalendarAlt} size="3x" />
  </>
));
