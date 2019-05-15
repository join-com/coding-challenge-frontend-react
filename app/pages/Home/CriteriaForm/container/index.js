import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { CRITERIA_FORM } from '../../../../store/bikeWise/constants';
import { loadItems } from '../../../../store/bikeWise/actions';
import { setLoading } from '../../../../store/loading/actions';

import CriteriaForm from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }

      dispatch(setLoading());
      dispatch(loadItems());
    },
  };
}

export default reduxForm({
  form: CRITERIA_FORM,
})(connect(null, mapDispatchToProps)(injectIntl(CriteriaForm)));
