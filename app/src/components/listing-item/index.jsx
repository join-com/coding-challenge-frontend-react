import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import Image from '../image'

const InfoWithDate = ({ text, date, additionalText }) => {
  return (
    <span className="col-9 text-secondary">
      {text}
      {dayjs(date * 1000).format('ddd MMM DD YYYY')}
      {additionalText ? ` - ${additionalText}` : ''}
    </span>
  )
}

const Description = ({ description }) => {
  return (
    <div className="col-10 text-justify">
      <p>{description}</p>
    </div>
  )
}

const Incident = props => {
  const {
    id,
    title,
    address,
    description,
    media,
    occurred_at,
    updated_at
  } = props.incident

  return (
    <div className="row list-group-item my-1">
      <div className="col-sm-2 float-left">
        <Image src={media.image_url_thumb} />
      </div>
      <div className="col-sm">
        <div className="row align-items-end">
          <h6 className="col-9">
            <Link to={`/case/${id}`} onClick={props.pageChange}> {title}</Link>
          </h6>
          {description ? <Description description={description} /> : null}
          <InfoWithDate
            text={'occurred on: '}
            date={occurred_at}
            additionalText={address}
          />
          <InfoWithDate text={'last updated on: '} date={updated_at} />
        </div>
      </div>
    </div>
  )
}

export default Incident
