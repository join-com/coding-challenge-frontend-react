import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormattedMessage } from 'react-intl';

import A from '../../../atoms/A';
import messages from './messages';
import Footer from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
    )).toBe(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://github.com/alexander-elgin">Alex Elgin</A>,
          }}
        />
      </section>
    )).toBe(true);
  });
});
