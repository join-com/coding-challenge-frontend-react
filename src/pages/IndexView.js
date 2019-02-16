import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStolenBikesList } from '../actions/incidents';
import ListView from '../components/ListView';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

class IndexView extends Component {
  async componentDidMount() {
    await this.props.fetchStolenBikesList();
  }
  renderMainSection() {
    switch (this.props.state.incidents.queryState) {
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        return <div>Error!</div>;
      default:
        return (
          <div>
            {this.props.state.incidents.items ? (
              <Fragment>
                <ListView items={this.props.state.incidents.items} />
                <Pagination />
              </Fragment>
            ) : (
              <div>No results found.</div>
            )}
          </div>
        );
    }
  }
  render() {
    return (
      <Fragment>
        <Filters />
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
