import React from 'react';
import { Card } from '../../ui-kits/Card';
import styled from 'styled-components';

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
        <Card
          key={elm.id}
          title={elm.title}
          description={elm.description}
          thumbnailURL={elm.media.image_url_thumb}
          date={elm.address}
        />
      ))}
    </StyledIndientsList>
  );
}

export default IndientsList;
