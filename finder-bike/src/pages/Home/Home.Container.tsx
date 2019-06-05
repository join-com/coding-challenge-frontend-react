import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "./Home";
import {
  getTextRequest as getText
} from "./Home.action";

const mapStateToProps = state => ({
  loading: state.homeReducer.request,
  data: state.homeReducer.data,
  error: state.homeReducer.error,
  text: state.homeReducer.text
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      getText
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
