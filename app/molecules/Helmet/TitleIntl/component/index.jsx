import React from 'react';
import { FormattedMessage } from 'react-intl';

import Title from '../Title';

const TitleIntl = (props) => (
  <FormattedMessage {...props}>
    {(title) => <Title content={title} />}
  </FormattedMessage>
);

export default TitleIntl;
