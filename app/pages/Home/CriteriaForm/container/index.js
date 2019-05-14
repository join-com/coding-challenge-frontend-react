import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { REPOSITORIES_FORM } from '../../../../store/github/constants';
import { loadRepositories } from '../../../../store/github/actions';
import { setLoading } from '../../../../store/loading/actions';

import RepositoriesForm from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }

      dispatch(setLoading());
      dispatch(loadRepositories());
    },
  };
}

export default reduxForm({
  form: REPOSITORIES_FORM,
})(connect(null, mapDispatchToProps)(injectIntl(RepositoriesForm)));
