import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H2 from '../../../atoms/H2';
import { MetaIntl, TitleIntl } from '../../../molecules/Helmet';

import RepositoriesList from '../RepositoriesList';
import CriteriaForm from '../UsernameField';

import messages from './messages';

import styles from './styles.scss';

const HomePage = ({ loading, error, repos }) => (
  <article>
    <TitleIntl {...messages.metaTitle} />
    <MetaIntl name="description" {...messages.metaDescription} />
    <div>
      <section className={styles['centered-section']}>
        <H2>
          <FormattedMessage {...messages.startProjectHeader} />
        </H2>
        <p>
          <FormattedMessage {...messages.startProjectMessage} />
        </p>
      </section>
      <section className={styles.section}>
        <H2>
          <FormattedMessage {...messages.trymeHeader} />
        </H2>
        <CriteriaForm />
        <RepositoriesList {...{loading, error, repos}} />
      </section>
    </div>
  </article>
);

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export default HomePage;
