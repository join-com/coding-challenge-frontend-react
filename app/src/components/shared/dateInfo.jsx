import React from 'react'
import dayjs from 'dayjs'
import Row from './row'

export default ({ text, date, additionalText }) => (
  <Row style={{ fontSize: '12px' }}>
    {text}
    {dayjs(date * 1000).format('ddd MMM DD YYYY')}
    {additionalText ? ` - ${additionalText}` : ''}
  </Row>
)
