import React, { FunctionComponent } from 'react'
// @ts-ignore
import { FieldTextStateless } from '@atlaskit/field-text'
import { FieldRenderProps } from 'react-final-form'

type FFProps = FunctionComponent<FieldRenderProps<any>>
type OwnProps = { input: object; placeholder: string }

type Props = FFProps & OwnProps

export const FFInput = ({ input, placeholder }: Props) => (
  <FieldTextStateless
    {...input}
    placeholder={placeholder}
    isLabelHidden
    shouldFitContainer
  />
)
