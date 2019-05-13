import { mapDispatchToProps } from './';
import { loadRepositories, changeUsername } from '../../../store/github/actions';

describe('<Home />', () => {
  describe('#mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('is injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('dispatches changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'alexander-elgin';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('is injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('dispatches the `loadRepositories` when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepositories());
      });

      it('prevents execution of the default handler if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
