import React from 'react';
import Datetime from 'react-datetime';

import '../../../node_modules/react-datetime/css/react-datetime.css';

import {
  Wrapper,
  Label,
  DatetimeWrapper
} from './styles';

const DatetimeComponent = ({ label, onChange, format, ...props }) => (
  <Wrapper>
    { label && <Label>{label}</Label> }
    <DatetimeWrapper>
      <Datetime
        { ...props }
        onChange={e => onChange({ target: { name: props.name, value: e.valueOf() }})}
      />
    </DatetimeWrapper>
  </Wrapper>
);

export default DatetimeComponent;
