import { shallow } from 'enzyme';
import React from 'react';

import { App } from './app';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchInlineSnapshot(`
<Row
  gutter={0}
>
  <Col
    lg={
      Object {
        "offset": 4,
        "span": 16,
      }
    }
    md={
      Object {
        "offset": 2,
        "span": 20,
      }
    }
    xl={
      Object {
        "offset": 6,
        "span": 12,
      }
    }
    xs={
      Object {
        "offset": 1,
        "span": 22,
      }
    }
  >
    <Header />
    <Cases />
  </Col>
</Row>
`);
});
