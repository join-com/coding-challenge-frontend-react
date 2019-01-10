import React from 'react'

const ListRecord = props => {
  const item = props.item
  
  return (
    <div className="row list-group-item">
      <div className="col-3">
        <img src={'https://images-eu.ssl-images-amazon.com/images/I/51VTh1X6vcL._SY300_QL70_.jpg'} alt="Logo here" width="150px" />
      </div>
      <div className="col">
        <a href="#">
        <h4 className="row">{item.title}</h4>
        </a>
        <div className="row">{item.description}</div>
        <div className="row">
          {item.date} - {item.city} , {item.postalCode}, {item.country} 
        </div>
      </div>
    </div>
  )
}

export default ListRecord
