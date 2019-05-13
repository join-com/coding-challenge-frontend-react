/**
 * Testing the NotFoundPage
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import Adapter from 'enzyme-adapter-react-16';

import H1 from '../../../atoms/H1';
import NotFound from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage
          id="boilerplate.pages.NotFound.header"
          defaultMessage={'Page not found.'}
        />
      </H1>)).toEqual(true);
  });
});
