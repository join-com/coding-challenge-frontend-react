import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import List from '../../../../atoms/List';
import LoadingIndicator from '../../../../molecules/LoadingIndicator';

import Repository from '../Repository';

import messages from './messages';
import styles from './styles.scss';

function RepositoriesList({ loading, error, repos }) {
  if(loading || (error !== false) || (repos !== false)) {
    return (
      <div className={styles.wrapper}>
        {loading ? <LoadingIndicator /> : <List className={styles.list} items={getListItems(repos)} />}
      </div>
    );
  }

  return null;
}

function getListItems(repos) {
  if(repos !== false) {
    return repos.map((repository) => <Repository repository={repository} />);
  }

  return [<FormattedMessage {...messages.somethingWrong} />];
}

RepositoriesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
};

export default RepositoriesList;
