import React from 'react';
import { Card } from '../../ui-kits/Card';
import styled from 'styled-components';
import { Text } from '../../ui-kits/Text';
import { faMapMarkedAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../../ui-kits/Icon';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export interface IIncidentSource {
  name: string;
  html_url: string;
  api_url: string;
}

export interface IIncidentMedia {
  image_url: string;
  image_url_thumb: string;
}

export interface IIncident {
  id: number;
  title: string;
  description: string;
  address: string;
  occurred_at: number;
  updated_at: number;
  url: string;
  source: IIncidentSource;
  media: IIncidentMedia;
  location_type?: string;
  location_description?: string;
  type: string;
  type_properties: string;
}

export interface IIncidentProps extends IIncidentList {
  onSelect: (e: any) => void;
}

export interface IIncidentList {
  data: IIncident[];
}

const StyledincidentsList = styled.div``;

function IncidentsList(props: IIncidentProps) {
  return (
    <StyledincidentsList>
      {props.data.map(elm => (
        <Card
          key={elm.id}
          thumbnailURL={elm.media.image_url_thumb}
          onClick={() => props.onSelect(elm.id)}
        >
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
    </StyledincidentsList>
  );
}

export default IncidentsList;
