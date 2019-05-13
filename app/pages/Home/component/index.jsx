import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import H2 from '../../../atoms/H2';
import { MetaIntl, TitleIntl } from '../../../molecules/Helmet';

import RepositoriesList from '../RepositoriesList';
import UsernameField from '../UsernameField';

import messages from './messages';

import styles from './styles.scss';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const repositoriesListProps = {
      loading,
      error,
      repos,
    };

    return (
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
            <form onSubmit={this.props.onSubmitForm} className={styles.form}>
              <UsernameField
                onChange={this.props.onChangeUsername}
                value={this.props.username}
              />
            </form>
            <RepositoriesList {...repositoriesListProps} />
          </section>
        </div>
      </article>
    );
  }
}

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
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default HomePage;
