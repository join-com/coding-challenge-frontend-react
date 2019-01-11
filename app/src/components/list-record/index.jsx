import React from 'react'
import dayjs from 'dayjs'

import defaultImage from './not_available.jpg'
import './style.css'

const ListRecord = props => {
  const { title, address, description, media, occurred_at } = props.incident

  return (
    <div className="row list-group-item">
      <div className="col-sm-2 float-left">
        <img
          src={media.image_url_thumb || defaultImage}
          alt="not available"
          className="img-thumbnail"
        />
      </div>
      <div className="col-sm">
        <div className="row align-items-end">
          <div className="col-9">
            <a href="/">{title}</a>
          </div>
          <div className="col-12">{description}</div>
          <div className="col-9">
            {dayjs(occurred_at * 1000).format('ddd MMM DD YYYY')} - {address}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListRecord
