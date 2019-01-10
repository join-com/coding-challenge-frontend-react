import React from 'react'

const Counter = props => {
  const total = props.total
  return (
    <div className="container">
      <button type="button" class="btn btn-primary">
        total <span class="badge badge-light">{total}</span>
      </button>
    </div>
  )
}

export default Counter
