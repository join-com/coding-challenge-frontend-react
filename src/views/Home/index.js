import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import withError from '../../containers/Error';
import withLoading from '../../containers/Loading';
import withIncidents from '../../containers/Incidents';

import Loader from '../../components/Loader';
import Incident from '../../components/Incident';
import Pagination from '../../components/Pagination';
import ErrorMessage from '../../components/ErrorMessage';

class Home extends Component {
  componentWillMount() {
    const { filters } = this.props.incidents;
    this.props.getIncidentsList(filters);
  }

  changePage = ({ page, direction }) => {
    const { history } = this.props;
    this.props.applyIncidentsFilters({ page: page || this.props.incidents.filters.page + direction }, history);
  }

  render() {
    const { list } = this.props.incidents;
    const { incidents, error } = this.props;
    const pagination = <Pagination onClick={this.changePage} page={incidents.filters.page} />

    if (error) {
      return <ErrorMessage error={error} />
    }

    return (
      <>
        { this.props.loading
          ? <Loader />
          : <Incident.List items={list} pagination={pagination} />
        }
      </>
    );
  }
};

export default compose(withIncidents, withLoading, withError, withRouter)(Home);