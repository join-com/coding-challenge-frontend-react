import ListView from '../components/ListView';
import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const items1 = [
  {
    id: 72790,
    title: 'Stolen 2014 Flyer Wave(silver or gray)',
    description:
      'having seen a man interested in this e-bike, but hurrying away, when I came out of the house. 20 later the bike has gone.',
    address: 'Berlin, 10779, DE',
    occurred_at: 1495692000,
    updated_at: 1550446746,
    media: {
      image_url_thumb: null
    }
  },
  {
    id: 4853,
    title: 'Stolen 2005 Trek 4300 Disc (silver or gray)',
    description:
      'Bike was parked in a locked cellar compartment. During night the door of the compartment was forced open and two bikes were stolen: Trek 4300 Disc and Trek Fuel Ex 8.',
    address: 'Halle, 06120, DE',
    occurred_at: 1410760800,
    updated_at: 1550387537,
    media: {
      image_url_thumb:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/112/small_Asset_140338'
    }
  }
];

const items2 = [
  {
    id: 4853,
    title: 'Stolen 2005 Trek 4300 Disc (silver or gray)',
    description:
      'Bike was parked in a locked cellar compartment. During night the door of the compartment was forced open and two bikes were stolen: Trek 4300 Disc and Trek Fuel Ex 8.',
    address: 'Halle, 06120, DE',
    occurred_at: 1410760800,
    updated_at: 1550387537,
    media: {
      image_url:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/112/Asset_140338',
      image_url_thumb:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/112/small_Asset_140338'
    }
  },
  {
    id: 4879,
    title: 'Stolen 2014 Trek Fuel EX 8 26 (black)',
    description:
      'Bike was parked in a locked cellar compartment. During night the door of the comparment was forced open and two bikes wer stolen: Trek Fuel EX 8 and Trek 4300 Disc. ',
    address: 'Halle, 06120, DE',
    occurred_at: 1410760800,
    updated_at: 1550387699,
    media: {
      image_url:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/112/Asset_140338',
      image_url_thumb:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/112/small_Asset_140338'
    }
  },
  {
    id: 3522,
    title: 'Stolen 2012 Cannondale Caad8 7 Sora (black and white)',
    description:
      'Stolen during the day from yard bike stands between three offices in front of restaurant.',
    address: 'Berlin, 10115, DE',
    occurred_at: 1408341600,
    updated_at: 1550387281,
    media: {
      image_url:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/9764/c_13_3RA87C_gry_14.png',
      image_url_thumb:
        'https://bikebook.s3.amazonaws.com/uploads/Fr/9764/small_c_13_3RA87C_gry_14.png'
    }
  }
];

describe('<ListView> tests', () => {
  it('should match with the snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <ListView items={items1} />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.items = items2;
    expect(tree).toMatchSnapshot();
  });
});
