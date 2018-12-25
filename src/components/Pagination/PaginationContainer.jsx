import { connect } from "react-redux";
import Pagination from "./Pagination";

import { getPaginationSelector } from "../../store/incidents";
import { changeUi, getCurrentPage } from "../../store/ui";

const mapStateToProps = state => {
  return {
    currentPage: getCurrentPage(state),
    pages: getPaginationSelector(state)
  };
};

const mapDispatchToProps = {
  changeUi
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
