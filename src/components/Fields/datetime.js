import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

import '../../../node_modules/react-datetime/css/react-datetime.css';

import {
  Wrapper,
  Label,
  DatetimeWrapper
} from './styles';

const getValue = (e) => {
  if (e && e.format) return e.format('x')/1000;
  if (e && !isNaN(e)) return moment(e).format('x')/1000;
  return null;
};

const DatetimeComponent = ({ label, onChange, format, ...props }) => (
  <Wrapper>
    { label && <Label>{label}</Label> }
    <DatetimeWrapper>
      <Datetime
        { ...props }
        onChange={e => onChange({ target: { name: props.name, value: getValue(e) }})}
      />
    </DatetimeWrapper>
  </Wrapper>
);

export default DatetimeComponent;
