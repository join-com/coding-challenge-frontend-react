import React from 'react'
// @ts-ignore
import { DatePicker } from '@atlaskit/datetime-picker'
import { PickerContainer } from './styled'

export const FFDatePicker = ({
  input,
  placeholder,
}: {
input: object
placeholder: string
}) => (
  <PickerContainer>
    <DatePicker {...input} placeholder={placeholder} />
  </PickerContainer>
)
