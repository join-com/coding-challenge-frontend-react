import { mapDispatchToProps } from './';
import { loadRepositories } from '../../../../store/github/actions';

describe('<CriteriaForm />', () => {
  describe('#mapDispatchToProps', () => {
    describe('onSubmit', () => {
      it('is injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });

      it('dispatches the `loadRepositories` when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmit();
        expect(dispatch).toHaveBeenCalledWith(loadRepositories());
      });

      it('prevents execution of the default handler if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmit(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
