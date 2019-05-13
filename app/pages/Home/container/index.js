import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeUsername, loadRepositories } from '../../../store/github/actions';
import { makeSelectError, makeSelectRepositories, makeSelectCurrentUsername } from '../../../store/github/selectors';
import { setLoading } from '../../../store/loading/actions';
import { makeSelectLoading } from '../../../store/loading/selectors';

import HomePageComponent from '../component';

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }

      dispatch(setLoading());
      dispatch(loadRepositories());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepositories(),
  username: makeSelectCurrentUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePageContainer;
