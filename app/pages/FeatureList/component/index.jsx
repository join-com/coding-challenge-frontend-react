import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../../../atoms/H1';
import List from '../../../atoms/List';
import { MetaIntl, TitleIntl } from '../../../molecules/Helmet';

import Feature from '../Feature';
import messages from './messages';

import styles from './styles.scss';

export default class FeatureList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const featuresData = [
      {
        header: messages.scaffoldingHeader,
        description: messages.scaffoldingMessage,
      },
      {
        header: messages.scaffoldingHeader,
        description: messages.scaffoldingMessage,
      },
      {
        header: messages.feedbackHeader,
        description: messages.feedbackMessage,
      },
      {
        header: messages.routingHeader,
        description: messages.routingMessage,
      },
      {
        header: messages.networkHeader,
        description: messages.networkMessage,
      },
      {
        header: messages.intlHeader,
        description: messages.intlMessage,
      },
    ];

    return (
      <div>
        <TitleIntl {...messages.metaTitle} />
        <MetaIntl name="description" {...messages.metaDescription} />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List className={styles.list} items={featuresData.map((featureData) => <Feature {...featureData} />)} />
      </div>
    );
  }
}
