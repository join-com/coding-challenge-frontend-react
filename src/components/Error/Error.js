import React from 'react'

import { Message } from './styled'

const Error = ({message}) => (
  <Message>
    {message}
  </Message>
)

Error.defaultProps = {
  message: 'Oops, something is wrong'
}

export default Error