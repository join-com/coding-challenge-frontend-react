import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignUpForm from '../../../organisms/SignUpForm';

import SignUpPage from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignUpPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <SignUpPage />
    );
  });

  it('renders the form', () => expect(component.type()).toEqual(SignUpForm));
});
