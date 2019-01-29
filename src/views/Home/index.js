import React, { Component } from 'react';
import { compose } from 'redux';

import withLoading from '../../containers/Loading';
import withIncidents from '../../containers/Incidents';

import Loader from '../../components/Loader';
import Incident from '../../components/Incident';
import Pagination from '../../components/Pagination';

class Home extends Component {
  componentWillMount() {
    const { filters } = this.props.incidents;
    this.props.getIncidentsList(filters);
  }

  nextPage = ({ page, direction }) => {
    this.props.applyIncidentsFilters({ page: page || this.props.incidents.filters.page + direction });
  }

  render() {
    const { list } = this.props.incidents;
    const pagination = <Pagination onClick={this.nextPage} page={this.props.incidents.filters.page} />

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

export default compose(withIncidents, withLoading)(Home);