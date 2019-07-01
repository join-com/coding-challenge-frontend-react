import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundComponent as NotFound } from '../notFound.component';

describe('NotFound: Component', () => {
  const defaultProps = {
    intl: { formatMessage: ({ id }) => id },
  };

  const component = props => <NotFound {...defaultProps} {...props} />;

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
