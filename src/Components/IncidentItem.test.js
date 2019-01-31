import React from 'react';
import IncidentItem from './IncidentItem';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const testProps = {
    "id": 94547,
    "title": "Stolen 2015 Gepida Alboin crs 500(silver, gray or bare metal)",
    "description": "Locked cellar in Warthestrasse 8, Kryptonite U-lock with cable both tyres locked to frame. Someone got in and took the whole thing as well as forced some storage doors open. ",
    "address": "Berlin, 12051, DE",
    "occurred_at": 1543309200000,
    "updated_at": 1548800324000,
    "url": "https://bikewise.org/api/v1/incidents/94547",
    "source": {
      "name": "BikeIndex.org",
      "html_url": "https://bikeindex.org/bikes/480323",
      "api_url": "https://bikeindex.org/api/v1/bikes/480323"
    },
    "media": {
      "image_url": null,
      "image_url_thumb": null
    },
    "location_type": null,
    "location_description": null,
    "type": "Theft",
    "type_properties": null
  };

  const component = renderer.create(<MemoryRouter><IncidentItem {...testProps} /></MemoryRouter>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
