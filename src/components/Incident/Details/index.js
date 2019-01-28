import React from 'react';

import Card from '../../Card';
import Maps from '../../Maps';

import { format } from '../../../helpers/DateTime';

import {
  Wrapper,
  Body,
  Image,
  Description,
  Divider,
} from './styles';

import {
  Title,
  OccurredAt,
  Address,
} from '../Common';

const Details = props => {
  const image = props.media && props.media.image_url 
    ? props.media.image_url 
    : 'https://via.placeholder.com/250x250?text=No+Picture';
    
  return (
    <Wrapper full={props.full}>
      <Card>
        <Image image={image} alt={props.title || 'Incident'} />
        <Body>
          <Title>{props.title}</Title>
          <Address>{props.address}</Address>
          <OccurredAt>
            <strong>Occured at: </strong>{ format(props.occurred_at) }{' | '} 
            <strong>Last Update: </strong>{ format(props.updated_at) }
          </OccurredAt>
          <Divider />
          { props.description &&
            <>
              <Description>{ props.description }</Description>
              <Divider />
            </>
          }
          { props.coordinates && <Maps coordinates={props.coordinates} /> }
        </Body>
      </Card>
    </Wrapper>
  );
}; 

export default Details;
