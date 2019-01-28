import React from 'react';

import Card from '../../Card';
import Button from '../../Button';
import { fromNow } from '../../../helpers/DateTime';

import {
  Wrapper,
  Body,
  Image,
} from './styles';

import {
  Title,
  OccurredAt,
  Address,
} from '../Common';

// {
//   "id": 96287,
//   "title": "Wissahickon Bikeway – missing guardrail on Lincoln Drive next to the bikeway",
//   "description": "01/26/2019  The guardrail separating the Wissahickon Bikeway from Lincoln Drive is missing.  Considering the recent pair of motor vehicle crashes from Lincoln Drive into/alongside the nearby upper bikeway bridge, this is very dangerous for trail users.",
//   "address": "Lincoln Dr Philadelphia, PA, 19144, USA",
//   "occurred_at": 1548551529,
//   "updated_at": 1548563591,
//   "url": "https://bikewise.org/api/v1/incidents/96287",
//   "source": {
//     "name": "SeeClickFix.com",
//     "html_url": "https://seeclickfix.com/issues/5330010",
//     "api_url": "https://seeclickfix.com/api/v2/issues/5330010"
//   },
//   "media": {
//     "image_url": "https://seeclickfix.com/files/issue_images/0124/4123/20190126_SAT_WISSY_Bikeway_Upper_MissingGuardRail.jpg",
//     "image_url_thumb": "https://seeclickfix.com/files/issue_images/0124/4123/20190126_SAT_WISSY_Bikeway_Upper_MissingGuardRail_square.jpg"
//   },
//   "location_type": null,
//   "location_description": null,
//   "type": "Hazard",
//   "type_properties": null
// },

const Item = props => {
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
          <OccurredAt>{fromNow(props.occurred_at)} ago</OccurredAt>
          <Button to={`/incidents/${props.id}`}>Details</Button>
        </Body>
      </Card>
    </Wrapper>
  );
};

export default Item;
