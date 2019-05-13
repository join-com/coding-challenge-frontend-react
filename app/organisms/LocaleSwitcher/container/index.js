import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import LocaleSwitcher from '../component';
import { changeLocale } from '../../../store/language/actions';
import { makeSelectLocale } from '../../../store/language/selectors';

export const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
