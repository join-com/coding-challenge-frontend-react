import React from 'react'

const Filter = props => {
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Search case descriptions"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="from"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="to"
        />
      </div>

      <button type="submit" className="btn btn-primary mb-2 mr-sm-2">
        Find Cases
      </button>
    </form>
  )
}

export default Filter
