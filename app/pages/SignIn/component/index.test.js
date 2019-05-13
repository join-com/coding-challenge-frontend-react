import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignInForm from '../../../organisms/SignInForm';

import SignInPage from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignInPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <SignInPage />
    );
  });

  it('renders the form', () => expect(component.type()).toEqual(SignInForm));
});
