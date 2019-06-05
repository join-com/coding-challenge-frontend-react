import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <Card
        thumbnailURL="https://seeclickfix.com/files/issue_images/0137/6393/img-image_480745259766912201753441_square.jpg"
        title="Sidewalk - Damage"
        description="5 plus inches of dangerous sidewalk looming in the shadows. Needs a ADA ramp built or raise the slab next to it to match. Cannot believe this has gone soo long without being addressed. It says Emeryville but the street signs are green (Oakland). Just a matter of time before someone loses some teeth going over bicycle handle bars or breaks a limb. At least start with painting it orange and putting a cone by it."
        date="12/12/2017 848 61st St Emeryville, CA, 94608, USA"
        titleLink="https://seeclickfix.com"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
