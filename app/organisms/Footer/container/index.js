import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadItems, setItems, setPage } from '../../../store/bikeWise/actions';
import { setLoading } from '../../../store/loading/actions';
import { makeSelectPage, makeSelectTotal } from '../../../store/bikeWise/selectors';

import Footer from '../component';

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
  total: makeSelectTotal(),
});

export const mapDispatchToProps = dispatch => ({
  navigate: (page) => {
    dispatch(setItems([]));
    dispatch(setPage(page));
    dispatch(setLoading());
    dispatch(loadItems());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
