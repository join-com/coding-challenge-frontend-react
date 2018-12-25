import { connect } from "react-redux";
import HomePage from "./HomePage";
import { fetchIncidents, getTotalIncidentsSelector, getIncidentsSelector } from "../../store/incidents";
import { getLoading, getError, getSearchValue, changeUi } from "../../store/ui";

const mapStateToProps = state => {
  return {
    incidents: getIncidentsSelector(state),
    isLoading: getLoading(state),
    totalIncidentsLength: getTotalIncidentsSelector(state),
    searchValue: getSearchValue(state),
    error: getError(state)
  };
};

const mapDispatchToProps = {
  fetchIncidents,
  changeUi
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
