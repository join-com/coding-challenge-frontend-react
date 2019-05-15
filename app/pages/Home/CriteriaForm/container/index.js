import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { CRITERIA_FORM } from '../../../../store/bikeWise/constants';
import {loadItems, setPage, setTotal} from '../../../../store/bikeWise/actions';
import { setLoading } from '../../../../store/loading/actions';

import CriteriaForm from '../component';

export const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(setTotal(Infinity));
    dispatch(setLoading());
    dispatch(loadItems());
  },
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: CRITERIA_FORM,
  validate: (fields) => {
    const { from, to } = fields.toJS();

    return (from > to
      ? { from: 'It should be less', to: 'It should be greater', }
      : {}
    );
  },
})(CriteriaForm));
