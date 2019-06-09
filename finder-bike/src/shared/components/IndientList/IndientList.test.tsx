import React from 'react';
import { render } from '@testing-library/react';
import IndientList from './IndientList';

describe('<IndientList /> spec', () => {
  const mockData = [
    {
      id: 99362,
      title: 'Stolen 2016 Cube Analog(blue)',
      description:
        'There were the 2 bikes I owned parked adjacent to each other and with 1 cable lock I locked the 2 bikes together and with another cable lock I locked the bike ,which was stolen, to the bike parking station bar in the courtyard of my apartment. I came back home at about 12:30 pm on 25.04.2019 and checked the bikes and found out the incident. The thief(s) cut off the cable locks and took only 1 of the bikes and left the 2nd bike.',
      address: 'Berlin, 10827, DE',
      occurred_at: 1556179200,
      updated_at: 1560049308,
      url: 'https://bikewise.org/api/v1/incidents/99362',
      source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/603410',
        api_url: 'https://bikeindex.org/api/v1/bikes/603410'
      },
      media: {
        image_url:
          'https://files.bikeindex.org/uploads/Pu/153579/large_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
        image_url_thumb:
          'https://files.bikeindex.org/uploads/Pu/153579/small_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg'
      },
      location_type: 'Thref',
      location_description: 'test',
      type: 'Theft',
      type_properties: 'test'
    }
  ];

  it('renders the component', () => {
    const component = render(<IndientList data={mockData} />);
    expect(component).toMatchSnapshot();
  });
});
