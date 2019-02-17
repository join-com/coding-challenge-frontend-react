import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCaseDetails } from '../actions/incidents';
import { setGoogleMapsMarker } from '../services/maps';
import './DetailsView.css';

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.googleMapsRef = React.createRef();
  }

  async componentDidMount() {
    await this.props.getCaseDetails(this.props.match.params.caseId);
    const coordinates = this.props.state.incidents.currentCase.coordinates;
    setGoogleMapsMarker(this.googleMapsRef.current, {
      lat: coordinates[1],
      lng: coordinates[0]
    });
  }

  render() {
    const currentCase = this.props.state.incidents.currentCase;
    return (
      <div className="case__details--container">
        {currentCase && (
          <Fragment>
            <h2 className="case__details--title">{currentCase.title}</h2>
            <h4 className="case__details--location">
              Stolen {currentCase.occurred_at} at {currentCase.address}
            </h4>
          </Fragment>
        )}
        <div ref={this.googleMapsRef} className="case__details--maps" />
        <h3 className="case__details--description--title">
          Description of incident
        </h3>
        {currentCase && (
          <div className="case__details--description">
            {currentCase.description
              ? currentCase.description
              : 'DESCRIPTION MISSING'}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCaseDetails: caseId => dispatch(getCaseDetails(caseId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsView);
