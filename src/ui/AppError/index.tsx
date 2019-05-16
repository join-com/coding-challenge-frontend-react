import React from 'react'

import { StyledError } from './styled'

interface Props {
  message?: string
}

export const AppError = ({ message }: Props) => (
  <StyledError>{message}</StyledError>
)

AppError.defaultProps = {
  message: 'Ooops, something went wrong',
}
