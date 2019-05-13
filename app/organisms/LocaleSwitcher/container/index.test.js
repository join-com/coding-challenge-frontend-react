import { mapDispatchToProps, mapStateToProps } from './';
import { changeLocale } from '../../../store/language/actions';

jest.mock('reselect', () => ({
  createSelector: (uselessSelector, localeSelector) => localeSelector,
}));

describe('LocaleSwitcher container', () => {
  describe('#mapDispatchToProps', () => {
    let dispatch;
    let dispatchedProps;

    beforeEach(() => {
      dispatch = jest.fn();
      dispatchedProps = mapDispatchToProps(dispatch);
    });

    describe('onChange', () => {
      it('should be injected', () => expect(dispatchedProps.onChange).toBeDefined());

      it('should dispatch changeLocale when called', () => {
        const locale = 'de';
        dispatchedProps.onChange({ target: { value: locale } });
        expect(dispatch).toHaveBeenCalledWith(changeLocale(locale));
      });
    });
  });

  describe('#mapStateToProps', () => {
    describe('locale selector', () => {
      it('returns an object containing the passed locale', () => {
        const locale = 'de';
        expect(mapStateToProps(locale)).toEqual({ locale });
      });
    });
  });
});
