import React from 'react';
import { FormattedMessage } from 'react-intl';

import Meta from '../Meta';

const MetaIntl = ({name, ...rest}) => (
  <FormattedMessage {...rest}>
    {(content) => <Meta content={content} name={name} />}
  </FormattedMessage>
);

export default MetaIntl;
