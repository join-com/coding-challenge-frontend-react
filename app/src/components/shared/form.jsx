import React from 'react'

import 'react-datepicker/dist/react-datepicker.css'

export const FormGroup = ({ children }) => (
  <div className="form-group">{children}</div>
)

export const FormInline = ({ children }) => (
  <div className="form-inline">{children}</div>
)

export const InputComponent = ({ placeholder, textChange }) => (
  <input
    type="text"
    className="react-datepicker__input-container"
    placeholder={placeholder}
    onChange={textChange}
  />
)
