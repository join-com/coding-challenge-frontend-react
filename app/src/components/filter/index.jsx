import React from 'react'

const Filter = props => {
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search case descriptions"
        />
      </div>
      <div className="form-group">
        <input type="date" className="form-control" placeholder="from" />
      </div>

      <div className="form-group">
        <input type="date" className="form-control" placeholder="to" />
      </div>

      <button type="submit" className="btn btn-primary">
        Find Cases
      </button>
    </form>
  )
}

export default Filter
