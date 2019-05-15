import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectItemsError, makeSelectItemsData } from '../../../store/bikeWise/selectors';
import { makeSelectLoading } from '../../../store/loading/selectors';

import HomePageComponent from '../component';

const mapStateToProps = createStructuredSelector({
  items: makeSelectItemsData(),
  loading: makeSelectLoading(),
  error: makeSelectItemsError(),
});

export default connect(mapStateToProps)(HomePageComponent);
