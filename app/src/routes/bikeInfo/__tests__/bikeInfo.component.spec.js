/* eslint-disable camelcase */
import React from 'react';
import { shallow } from 'enzyme';

import { BikeInfo } from '../bikeInfo.component';

describe('BikeInfo: Component', () => {
  const googleMapsUrl = address => `https://maps.google.com/maps/places/${address}`;
  const defaultProps = {
    selectBikeInfo: () => {},
    requestBikeInfo: () => {},
    match: { params: { id: 5555 } },
    selected: {
      id: 102799,
      title: 'Non Emergency Traffic Concerns',
      description:
        // eslint-disable-next-line max-len
        'On the bike trail, the two (2) barriers to prevent car traffic on the trail are both unlocked and the locks are gone.  These could easily be knocked over and hurt someone or stolen.  The barriers are on each side of the power lines near the Sunny Meadow Farms access trail.',
      address: 'Robin Hill Rd Chelmsford, MA, 01824, USA',
      occurred_at: 1561746527,
      updated_at: 1561755634,
      media: {
        image_url: null,
        image_url_thumb: null,
      },
      location_type: null,
      location_description: null,
      type: 'theft',
      type_properties: null,
    },
  };

  const component = props => <BikeInfo {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should include title, description date of theft, updated date, location of the theft and image if any.', () => {
    const wrapper = render();
    expect(wrapper.find('h1').text()).toEqual(defaultProps.selected.title);
    expect(wrapper.find('p').text()).toEqual(defaultProps.selected.description);
    expect(wrapper.find('img').prop('src')).toEqual(defaultProps.selected.media.image_url);
    expect(wrapper.find('img').prop('src')).toEqual(defaultProps.selected.media.image_url);
    expect(wrapper.find('a').prop('href')).toEqual(googleMapsUrl(defaultProps.selected.address));
    expect(wrapper.prop('selected').occurred_at).toEqual(defaultProps.selected.occurred_at);
    expect(wrapper.prop('selected').updated_at).toEqual(defaultProps.selected.updated_at);
  });
});
