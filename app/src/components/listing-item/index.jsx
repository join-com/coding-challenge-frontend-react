import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import Image from '../image'
import Row from '../shared/row'
import Column from '../shared/col'
import { ListGroupItem } from '../shared/list'

const InfoWithDate = ({ text, date, additionalText }) => {
  return (
    <Row style={{ fontSize: '12px' }}>
      {text}
      {dayjs(date * 1000).format('ddd MMM DD YYYY')}
      {additionalText ? ` - ${additionalText}` : ''}
    </Row>
  )
}

const Description = ({ description }) => {
  return <Row style={{ maxWidth: '80%' }}>{description}</Row>
}

const Incident = props => {
  const { id, title, address, description, media, occurred_at, updated_at } = props.incident

  return (
    <ListGroupItem style={{ backgroundColor: 'white' }}>
      <Column style={{ maxWidth: '20%', float: 'left' }}>
        <Image src={media.image_url_thumb} />
      </Column>
      <Column>
        <Row>
          <h6>
            <Link to={`/case/${id}`} onClick={props.pageChange}>
              {title}
            </Link>
          </h6>
        </Row>
        {description ? <Description description={description} /> : null}
        <Row>
          <Column>
            <InfoWithDate text={'occurred on: '} date={occurred_at} additionalText={address} />
            <InfoWithDate text={'last updated on: '} date={updated_at} />
          </Column>
        </Row>
      </Column>
    </ListGroupItem>
  )
}

export default Incident
