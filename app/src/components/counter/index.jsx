import React from 'react'

const Counter = props => {
  const totalRecords = props.totalRecords
  return (
    <div className="container">
      <button type="button" disabled className="btn btn-primary">
        Total <span className="badge badge-light">{totalRecords}</span>
      </button>
    </div>
  )
}

export default Counter
