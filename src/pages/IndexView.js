import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStolenBikesList } from '../actions/incidents';
import ListView from '../components/ListView';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

class IndexView extends Component {
  onUpdateSearchParams = filterParams => {
    const filters = {
      ...this.props.state.incidents.filters,
      ...filterParams,
      page: 1
    };
    this.props.fetchStolenBikesList(filters);
  };

  onUpdatePagination = pageParams => {
    console.log('pageParams', pageParams);
    const filters = { ...this.props.state.incidents.filters, ...pageParams };
    this.props.fetchStolenBikesList(filters);
  };

  componentDidMount() {
    this.props.fetchStolenBikesList(this.props.state.incidents.filters);
  }

  renderMainSection = () => {
    switch (this.props.state.incidents.queryState) {
      case 'loading':
        return <div style={{ textAlign: 'center' }}>Loading...</div>;
      case 'error':
        return <div style={{ textAlign: 'center' }}>Error!</div>;
      default:
        return (
          <div>
            {this.props.state.incidents.cases.length ? (
              <Fragment>
                <div style={{ textAlign: 'right' }}>
                  Total Cases: {this.props.state.incidents.totalCases}
                </div>
                <ListView items={this.props.state.incidents.cases} />
                <Pagination
                  currentPage={this.props.state.incidents.filters.page}
                  totalItems={this.props.state.incidents.totalCases}
                  itemsPerPage={this.props.state.incidents.filters.per_page}
                  updatePageFn={this.onUpdatePagination}
                />
              </Fragment>
            ) : (
              <div style={{ textAlign: 'center' }}>No results found.</div>
            )}
          </div>
        );
    }
  };

  render() {
    return (
      <Fragment>
        <Filters
          onUpdateSearchParams={this.onUpdateSearchParams}
          occurred_after={this.props.state.incidents.filters.occurred_after}
          occurred_before={this.props.state.incidents.filters.occurred_before}
          query={this.props.state.incidents.filters.query}
        />
        {this.renderMainSection()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStolenBikesList: params => dispatch(fetchStolenBikesList(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexView);
