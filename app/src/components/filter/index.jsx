import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const Filter = props => {
  return (
    <div className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="react-datepicker__input-container"
          placeholder="search case"
          onChange={props.textChange}
        />
      </div>
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
    </div>
  )
}

export default Filter
