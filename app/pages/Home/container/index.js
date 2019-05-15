import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectError, makeSelectRepositories } from '../../../store/github/selectors';
import { makeSelectLoading } from '../../../store/loading/selectors';

import HomePageComponent from '../component';

const mapStateToProps = createStructuredSelector({
  items: makeSelectRepositories(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps)(HomePageComponent);
