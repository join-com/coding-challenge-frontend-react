import React from 'react';

import {
  Wrapper,
  Center,
} from './styles';

import Fields from '../Fields';

const Filter = (props) => (
  <Wrapper>
    <Center>
      <Fields.Select
        label="Incident Type"
        name='incident_type'
        options={['theft', 'crash', 'hazard']}
        onChange={props.onChange}
      />
      
      <Fields.Select
        label="Proximy"
        name='proximity'
        options={['berlin', 'san francisco', 'london']}
        onChange={props.onChange}
      />

      <Fields.DateTime
        label='Occured After'
        name='occurred_after'
        onChange={props.onChange}
        dateFormat={'DD/MM/YYYY'}
        timeFormat={false}
        closeOnTab={false}
      />

      <Fields.DateTime
        label='Occured Before'
        name='occurred_before'
        onChange={props.onChange}
        dateFormat={'DD/MM/YYYY'}
        timeFormat={false}
        closeOnTab={false}
      />
    </Center>
  </Wrapper>
);

export default Filter;
