import React, { Component } from "react";
import "../App.css";
import { getError, getIncidentCount, getPaginatedIncidents, getPending } from "../redux/reducers/BikesReducer";
import { fetchAllIncidents } from "../api/apiClient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCurrentPage } from "../redux/reducers/PaginationReducer";
import BikeList from "./BikeList";
import Error from "../states/Error";
import Progress from "../states/Progress";
import Empty from "../states/Empty";

class BikeContent extends Component {
  componentWillMount() {
    const { fetchAllIncidents } = this.props;
    fetchAllIncidents();
  }

  render() {
    const { paginatedIncidents, currentPage, error, pending, count } = this.props;
    const currentPageIncidents = paginatedIncidents[currentPage];
    return (
      <div>
        {error && <Error />}
        {pending && <Progress />}
        {!error && !pending && currentPageIncidents && currentPageIncidents.length > 0 &&
        <BikeList currentPageIncidents={currentPageIncidents} count={count} />}
        {!error && !pending && !currentPageIncidents &&
        <Empty />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getError(state),
  paginatedIncidents: getPaginatedIncidents(state),
  count: getIncidentCount(state),
  pending: getPending(state),
  currentPage: getCurrentPage(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllIncidents
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikeContent);




