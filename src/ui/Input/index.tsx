import React from 'react'
// @ts-ignore
import { FieldTextStateless } from '@atlaskit/field-text'

export const FFInput = ({
  input,
  placeholder,
}: {
input: object
placeholder: string
}) => (
  <FieldTextStateless
    {...input}
    placeholder={placeholder}
    isLabelHidden
    shouldFitContainer
  />
)
