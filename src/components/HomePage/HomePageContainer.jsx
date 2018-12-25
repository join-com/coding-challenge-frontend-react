import { connect } from "react-redux";
import HomePage from "./HomePage";
import { fetchIncidents, getSlicedIncidentsSelector, getTotalIncidentsSelector } from "../../store/incidents";
import { changeUi, getSearchValue, getLoading, getError, getItemsPerPage } from "../../store/ui";

const mapStateToProps = state => {
  return {
    incidents: getSlicedIncidentsSelector(state),
    isLoading: getLoading(state),
    searchValue: getSearchValue(state),
    totalIncidentsLength: getTotalIncidentsSelector(state),
    error: getError(state),
    itemsPerPage: getItemsPerPage(state)
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
