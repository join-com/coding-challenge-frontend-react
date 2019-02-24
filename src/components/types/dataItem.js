import {
  shape,
  number,
  string,
} from 'prop-types';

const dataItem = shape({
  id: number,
  title: string,
  description: string,
  address: string,
  occurred_at: number,
  updated_at: number,
  url: string,
  source: shape({
    name: string,
    html_url: string,
    api_url: string,
  }),
  media: shape({
    image_url: string,
    image_url_thumb: string,
  }),
  location_type: string,
  location_description: string,
  type: string,
  type_properties: string,
});

export default dataItem;
