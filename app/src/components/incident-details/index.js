import React from 'react'

import dayjs from 'dayjs'

import Image from '../image'
import Map from '../map'

const InfoWithDate = ({ text, date, additionalText }) => {
  return (
    <span className="col-10 text-secondary font-italic">
      {text}
      {dayjs(date * 1000).format('ddd MMM DD YYYY')}
      {additionalText ? ` - ${additionalText}` : ''}
    </span>
  )
}

const Description = ({ description }) => {
  return (
    <div className="row col-9 text-justify">
      <p>{description}</p>
    </div>
  )
}

const IncidentDetailsComponent = props => {
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
    <div className="container bg-white px-5 py-2">
      <div className="row font-weight-bold bg-dark text-light border col-2 my-2">
        Record no: {id}
      </div>
      <div className="row img-fluid">
        <Image src={media.image_url} style={{ maxHeight: '300px' }} />
        <Map address={address} />
      </div>
      <div className="row">
        <h6 className="col-9 my-2 font-weight-bold">{title}</h6>
      </div>
      {description ? <Description description={description} /> : null}
      <div className="row align-items-end">
        <InfoWithDate
          text={'occurred on: '}
          date={occurred_at}
          additionalText={address}
        />
      </div>
      <div className="row align-items-end">
        <InfoWithDate text={'last updated on: '} date={updated_at} />
      </div>
    </div>
  )
}

export default IncidentDetailsComponent
