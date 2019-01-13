import React from 'react'

const Filter = props => {
  return (
    <div className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="search case"
          onChange={props.textChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="from"
          onChange={props.dateChangeFrom}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="to"
          onChange={props.dateChangeTo}
        />
      </div>
    </div>
  )
}

export default Filter
