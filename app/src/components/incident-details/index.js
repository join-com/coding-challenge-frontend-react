import React from 'react'

import Image from '../image'

import DateInfo from '../shared/dateInfo'
import Description from '../shared/description'
import Row from '../shared/row'
import Column from '../shared/col'
import Container from '../shared/container'

const IncidentDetailsComponent = props => {
  const { id, title, address, description, media, occurred_at, updated_at } = props.incident
  const Map = props.MapContainer
  return (
    <Container style={{ backgroundColor: 'white' }}>
      <Row>
        <Column style={{ fontWeight: 'bold' }}>Record no: {id}</Column>
      </Row>
      <Row style={{padding:'10px'}}>
        <Image src={media.image_url} style={{ maxHeight: '300px' }} />
        <Map address={address} />
      </Row>
      <Row>
        <Column>
          <h6 className="col-9 my-2 font-weight-bold">{title}</h6>
        </Column>
      </Row>
      <Container splitLines={false}>{description ? <Description description={description} /> : null}</Container>
      <Container splitLines={false}>
        <Column>
          <DateInfo text={'occurred on: '} date={occurred_at} additionalText={address} />
          <DateInfo text={'last updated on: '} date={updated_at} />
        </Column>
      </Container>
    </Container>
  )
}

export default IncidentDetailsComponent
