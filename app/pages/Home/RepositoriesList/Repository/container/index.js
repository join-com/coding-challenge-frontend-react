import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUsername } from '../../../../../store/github/selectors';

import Repository from '../component';

export default connect(createStructuredSelector({
  currentUser: makeSelectUsername(),
}))(Repository);
