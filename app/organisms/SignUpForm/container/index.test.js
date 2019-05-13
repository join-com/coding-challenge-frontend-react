import { fromJS } from 'immutable';

import { mapDispatchToProps } from './';
import messages from './messages';
const actions = require('../../../store/auth/actions');

describe('SignUp container', () => {
  describe('#mapDispatchToProps', () => {
    describe('onSubmit', () => {
      beforeEach(() => {
        actions.submitSignUpRequest = (serializedData) => `submit ${serializedData}`;
      });

      it('dispatches the `submitSignUpRequest` action', () => {
        const user = { name: 'alexander-elgin', email: 'sascha.elgin@gmail.com' };
        const dispatch = jest.fn();
        const intl = 'INTL';
        mapDispatchToProps(dispatch, { intl }).onSubmit(fromJS(user));
        expect(dispatch).toHaveBeenCalledWith(actions.submitSignUpRequest(user, intl, messages));
      });
    });
  });
});
