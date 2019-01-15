import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import IncidentListingItem from './index'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

const incident = {
  id: 93593,
  title: 'Stolen 2018 UNIMOKE-Urban Drivestyle UNIMOKE Swing(black)',
  description: 'someone broke into the house, cut the wooden railings beside the stairs that my bike was locked to.',
  address: 'Berlin, 10405, DE',
  occurred_at: 1540929600,
  updated_at: 1547567622,
  media: {
    image_url: 'https://files.bikeindex.org/uploads/Pu/139855/large_bike-3.jpg',
    image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/139855/small_bike-3.jpg'
  }
}

test('Should render incident details component', () => {
  const component = render(
    <Router>
      <IncidentListingItem incident={incident} Link={Link} />
    </Router>
  )
  expect(component).toMatchSnapshot()
})
