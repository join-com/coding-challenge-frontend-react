import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectSelectedUsername } from '../../../../../store/github/selectors';

import Repository from '../component';

export default connect(createStructuredSelector({
  currentUser: makeSelectSelectedUsername(),
}))(Repository);
