import * as React from 'react'
import { shallow } from 'enzyme'

import { Application } from './Application'

describe('Application component', () => {
  it('should render without crash', () => {
    shallow(<Application />)
  })
})
