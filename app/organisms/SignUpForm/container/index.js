import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { SIGN_UP_FORM } from '../../../store/auth/constants';
import { submitSignUpRequest } from '../../../store/auth/actions';

import SignUpForm from '../component';
import messages from './messages';

export const mapDispatchToProps = (dispatch, { intl }) => ({
  onSubmit: (values) => dispatch(submitSignUpRequest(values.toJS(), intl, messages)),
});

export default injectIntl(reduxForm({
  form: SIGN_UP_FORM,
})(connect(null, mapDispatchToProps)(injectIntl(SignUpForm))));
