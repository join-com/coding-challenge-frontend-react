import { connect } from 'react-redux';
import {
  setError,
  clearError,
} from '../../store/actions';

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearError: () => dispatch(clearError()),
    setError: params => dispatch(setError(params)),
  };
}

export default function withError(WrappedComponent) {
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
