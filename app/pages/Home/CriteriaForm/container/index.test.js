import { mapDispatchToProps } from './';
import { loadItems } from '../../../../store/bikeWise/actions';

describe('<CriteriaForm />', () => {
  describe('#mapDispatchToProps', () => {
    describe('onSubmit', () => {
      it('is injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });

      it('dispatches the `loadItems` when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmit();
        expect(dispatch).toHaveBeenCalledWith(loadItems());
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
