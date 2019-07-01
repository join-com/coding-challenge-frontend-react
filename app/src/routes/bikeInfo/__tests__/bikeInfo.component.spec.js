/* eslint-disable camelcase */
import React from 'react';
import { shallow } from 'enzyme';

import { BikeInfo } from '../bikeInfo.component';

describe('BikeInfo: Component', () => {
  const defaultProps = {
    selectBikeInfo: () => {},
    requestBikeInfo: () => {},
    match: { params: { id: 5555 } },
    bike: {
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
    expect(wrapper.instance().props.bike.title).toEqual(defaultProps.bike.title);
    expect(wrapper.instance().props.bike.description).toEqual(defaultProps.bike.description);
    expect(wrapper.instance().props.bike.media.image_url).toEqual(defaultProps.bike.media.image_url);
    expect(wrapper.instance().props.bike.address).toEqual(defaultProps.bike.address);
    expect(wrapper.instance().props.bike.occurred_at).toEqual(defaultProps.bike.occurred_at);
    expect(wrapper.instance().props.bike.updated_at).toEqual(defaultProps.bike.updated_at);
  });
});
