import React from 'react';
import { storiesOf } from '@storybook/react';

import { BikeInfo } from './bikeInfo.component';

const defaultProps = {};

storiesOf('BikeInfo', module).add('Default', () => <BikeInfo {...defaultProps} />);
