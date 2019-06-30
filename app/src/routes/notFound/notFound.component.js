import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import { compose } from 'ramda';

import messages from './notFound.messages';
import { Container } from './notFound.styles';
import { H1 } from '../../theme/typography';

export class NotFoundComponent extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Container>
        <Helmet title={this.props.intl.formatMessage(messages.pageTitle)} />

        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
      </Container>
    );
  }
}

export const NotFound = compose(injectIntl)(NotFoundComponent);
