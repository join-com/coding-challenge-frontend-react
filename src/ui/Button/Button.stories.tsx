import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

storiesOf('Button', module).add('Simple button', () => <Button onClick={() => {}}>Next</Button>);
