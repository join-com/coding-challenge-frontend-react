import { connect } from "react-redux";
import DetailsPage from "./DetailsPage";
import { getIncidentById, fetchIncidentById } from "../../store/incidents";
import { getLoading, getError } from "../../store/ui";

const mapStateToProps = (state, props) => {
  return {
    item: getIncidentById(state, props),
    isLoading: getLoading(state),
    error: getError(state)
  };
};

const mapDispatchToProps = {
  fetchIncidentById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
