import React from 'react'

const Counter = ({ totalRecords, isLoading }) => {
  if (isLoading) {
    return null
  }
  return (
    <React.Fragment>
      <hr />
      <div className="container text-right">
        <h5>
          Total reported incidents
          <span class="badge badge-primary mx-2">{totalRecords}</span>
        </h5>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default Counter
