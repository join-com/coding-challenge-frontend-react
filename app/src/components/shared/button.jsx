import React from 'react'

export default ({ children, style }) => (
  <button className="btn my-3 btn-primary btn-sm" style={style}>
    {children}
  </button>
)
