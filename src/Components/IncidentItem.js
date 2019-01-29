import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import './Incident.css'

const IncidentItem = props => {
  const {
    media, title, description,
    address,
    id,
  } = props;
  const occurred_at = new Date(props.occurred_at);
  const updated_at = new Date(props.updated_at);

  return (
    <div className="incidentCard">
      <Container fluid>
        <Row>
          <Col md="2" lg="2" xl="2">
            <div><img src={media.image_url_thumb || 'https://via.placeholder.com/80'} alt={props.title} width="80"/></div>
          </Col>
          <Col md="10" lg="10" xl="10">
            <div><Link to={{
                pathname: `/incident/${id}`,
                state: { incident: props }
              }}>{title}</Link></div>
            <div>{description}</div>
            <div><span className="text-warning">{address}</span></div>
            <div className="text-info">{`Theft on ${occurred_at.toDateString()}. Reported on ${updated_at.toDateString()}`}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IncidentItem;
