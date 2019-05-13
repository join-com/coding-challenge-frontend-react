import { mapDispatchToProps } from './';
import { signOut } from '../../../store/auth/actions';

describe('SignOut container', () => {
  describe('#mapDispatchToProps', () => {
    describe('signOut', () => {
      it('dispatches the `signOut` action', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).signOut();
        expect(dispatch).toHaveBeenCalledWith(signOut());
      });
    });
  });
});
