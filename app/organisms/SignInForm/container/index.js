import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { SIGN_IN_FORM } from '../../../store/auth/constants';
import { submitSignInRequest } from '../../../store/auth/actions';

import SignInForm from '../component';
import messages from './messages';

export const mapDispatchToProps = (dispatch, { intl }) => ({
  onSubmit: (values) => dispatch(submitSignInRequest(values.toJS(), intl, messages)),
});

export default injectIntl(reduxForm({
  form: SIGN_IN_FORM,
})(connect(null, mapDispatchToProps)(injectIntl(SignInForm))));
