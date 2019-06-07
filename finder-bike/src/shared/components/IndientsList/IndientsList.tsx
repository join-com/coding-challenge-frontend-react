import React from 'react';
import { Card } from '../../ui-kits/Card';
import styled from 'styled-components';
import { Text } from '../../ui-kits/Text';
import { faMapMarkedAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../../ui-kits/Icon';
import { format } from 'date-fns';

export interface IIndientSource {
  name: string;
  html_url: string;
  api_url: string;
}

export interface IIndientMedia {
  image_url: string;
  image_url_thumb: string;
}

export interface IIndient {
  id: number;
  title: string;
  description: string;
  address: string;
  occurred_at: number;
  updated_at: number;
  url: string;
  source: IIndientSource;
  media: IIndientMedia;
  location_type?: string;
  location_description?: string;
  type: string;
  type_properties: string;
}

export interface IIndientList {
  data: IIndient[];
}

const StyledIndientsList = styled.div``;

function IndientsList(props: IIndientList) {
  return (
    <StyledIndientsList>
      {props.data.map(elm => (
        <Card key={elm.id} thumbnailURL={elm.media.image_url_thumb}>
          <Text size={15} isBold isBlock>
            {elm.title}
          </Text>
          <Text isBlock>{elm.description}</Text>
          <Text isBlock>
            <Icon icon={faMapMarkedAlt} /> Address: {elm.address}
          </Text>
          <Text isBlock>
            <Icon icon={faClock} /> Occurred at:{' '}
            {format(elm.occurred_at, 'MM/DD/YYYY hh:ss a')}
          </Text>
          <Text isBlock>
            <Icon icon={faClock} /> Updated at:{' '}
            {format(elm.updated_at, 'MM/DD/YYYY hh:ss a')}
          </Text>
        </Card>
      ))}
    </StyledIndientsList>
  );
}

export default IndientsList;
