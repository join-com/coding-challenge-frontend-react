import React, { Fragment } from 'react'

const Container = ({ children, style, className="container", splitLines = true }) => (
  <Fragment>
    {splitLines && <hr />}
    <div className={className} style={style}>{children}</div>
    {splitLines && <hr />}
  </Fragment>
)

export default Container
