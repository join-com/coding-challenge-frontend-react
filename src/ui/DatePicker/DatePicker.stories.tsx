import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, date } from '@storybook/addon-knobs';
import 'react-datepicker.css';

import DatePicker from 'react-datepicker';

const stories = storiesOf('DatePicker', module);
// stories.addDecorator(withKnobs);

stories.add('DatePicker', () => {
    return <DatePicker selected={null} onChange={() => {}} />;
});

// function getKnobs() {
//     return date('Date', new Date());
// }
