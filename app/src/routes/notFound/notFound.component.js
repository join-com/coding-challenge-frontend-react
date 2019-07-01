import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'ramda';

import messages from './notFound.messages';
import { Container } from './notFound.styles';
import ImageNotFound from '../../images/404.svg';

export class NotFoundComponent extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Container>
        <Helmet title={this.props.intl.formatMessage(messages.pageTitle)} />
        <img src={ImageNotFound} width="500" />
      </Container>
    );
  }
}

export const NotFound = compose(injectIntl)(NotFoundComponent);
