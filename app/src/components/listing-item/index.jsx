import React from 'react'
import { Link } from 'react-router-dom'

import Image from '../image'
import Row from '../shared/row'
import Column from '../shared/col'
import { ListGroupItem } from '../shared/list'
import DateInfo from '../shared/dateInfo';
import Description from '../shared/description'

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
            <DateInfo text={'occurred on: '} date={occurred_at} additionalText={address}/>
            <DateInfo text={'last updated on: '} date={updated_at}/>
          </Column>
        </Row>
      </Column>
    </ListGroupItem>
  )
}

export default Incident
