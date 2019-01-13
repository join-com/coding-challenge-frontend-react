import React from 'react'
import DatePicker from 'react-datepicker'

import { FormGroup, FormInline, InputComponent } from '../shared/form'

const Filter = props => (
  <FormInline>
    <FormGroup>
      <InputComponent placeholder="search case" textChange={props.textChange} />
    </FormGroup>
    <DatePicker
      selected={props.fromDate}
      onChange={props.dateChangeFrom}
      isClearable={true}
      placeholderText="from date"
    />
    <DatePicker
      selected={props.toDate}
      onChange={props.dateChangeTo}
      isClearable={true}
      placeholderText="to date"
    />
  </FormInline>
)

export default Filter
