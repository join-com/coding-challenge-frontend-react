import React from 'react'
// @ts-ignore
import { DatePicker } from '@atlaskit/datetime-picker'
import { PickerContainer } from './styled'

export const FFDatePicker = ({
  input,
  placeholder,
  meta: { error, touched },
}: {
input: object
placeholder: string
meta: {
error?: string
touched?: boolean
}
}) => (
  <PickerContainer>
    <DatePicker
      {...input}
      placeholder={error && touched ? error : placeholder}
      isInvalid={error && touched}
    />
  </PickerContainer>
)
