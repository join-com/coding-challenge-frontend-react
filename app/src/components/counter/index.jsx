import React from 'react'

const Counter = props => {
  const total = props.total
  return (
    <div className="container">
      <button type="button" className="btn btn-primary">
        total <span className="badge badge-light">{total}</span>
      </button>
    </div>
  )
}

export default Counter
