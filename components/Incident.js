import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const incidentCard = {
  border: '1px solid gray',
  margin: '10px 0',
  padding: 10
}

const Incident = (props) => {
  const occurred_at = new Date(props.occurred_at);
  const updated_at = new Date(props.updated_at);
  
  return (
    <div style={incidentCard}>
      <Container fluid>
        <Row>
          <Col md="2" lg="2" xl="2">
            <div><img src={props.media.image_url_thumb || 'https://via.placeholder.com/80'} width="80"/></div>
          </Col>
          <Col md="10" lg="10" xl="10">
            <div><Link href={`/case?id=${props.id}`} as={`/case/${props.id}`}><a>{props.title}</a></Link></div>
            <div>{props.description}</div>
            <div><span className="text-warning">{props.address}</span></div>
            <div className="text-info">{`Theft on ${occurred_at.toDateString()}. Reported at ${updated_at.toDateString()}`}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )}
  
  export default Incident