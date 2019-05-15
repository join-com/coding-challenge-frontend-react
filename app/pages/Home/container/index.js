import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadItems } from '../../../store/bikeWise/actions';
import { setLoading } from '../../../store/loading/actions';
import { makeSelectItemsError, makeSelectItemsData } from '../../../store/bikeWise/selectors';
import { makeSelectLoading } from '../../../store/loading/selectors';

import HomePage from '../component';

const mapStateToProps = createStructuredSelector({
  items: makeSelectItemsData(),
  loading: makeSelectLoading(),
  error: makeSelectItemsError(),
});

export const mapDispatchToProps = dispatch => ({
  search: () => {
    dispatch(setLoading());
    dispatch(loadItems());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
