import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`

export default class CalendarRange extends React.Component {
  handleFromChange = from => {
    const { onDateFromChange } = this.props
    onDateFromChange(from)
  }

  handleToChange = to => {
    const { onDateFromChange } = this.props
    onDateFromChange(to)
  }

  render() {
    const { from, to } = this.props
    const modifiers = { start: from, end: to }
    return (
      <Wrapper>
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />{' '}
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={el => {
              this.to = el
            }}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
      </Wrapper>
    )
  }
}
