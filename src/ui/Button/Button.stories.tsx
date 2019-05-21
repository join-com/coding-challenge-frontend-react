import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

storiesOf('Button', module).add('with text', () => <Button text={'123'} onClick={() => {}} />);
