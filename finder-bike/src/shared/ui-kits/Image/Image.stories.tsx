import { storiesOf } from '@storybook/react';
import React from 'react';
import Image from './Image';
import thumbnail from '../../../assets/images/no-image.png';

storiesOf('UI-Kit', module).add('Image', () => <Image src={thumbnail} />);
