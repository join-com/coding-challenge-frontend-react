import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCaseDetails } from '../actions/incidents';
import { setGoogleMapsMarker } from '../services/maps';

class DetailsView extends Component {
  constructor(props) {
    super(props);
    this.googleMapsRef = React.createRef();
  }

  async componentDidMount() {
    await this.props.getCaseDetails(this.props.match.params.caseId);
    const coordinates = this.props.state.incidents.currentCase.coordinates;
    // const coordinates = [13.4275004, 52.5444];
    setGoogleMapsMarker(this.googleMapsRef.current, {
      lat: coordinates[0],
      lng: coordinates[1]
    });
  }

  render() {
    const currentCase = this.props.state.incidents.currentCase;
    return (
      <div>
        {currentCase && (
          <div>
            <div>{currentCase.title}</div>
            <div>
              Stolen {currentCase.occurred_at} at {currentCase.address}
            </div>
            <div>Description of Incident</div>
          </div>
        )}
        <div
          ref={this.googleMapsRef}
          style={{ width: '100%', height: '100px' }}
        />
        {currentCase && (
          <div>
            <div>{currentCase.description}</div>
            <div ref={this.googleMapsRef} />
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
