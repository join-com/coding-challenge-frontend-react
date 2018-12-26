import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { ERROR_MESSAGE } from "../../constants/global";
import ErrorMessage from "../ui/ErrorMessage";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      showLoadMapError: false
    };
  }

  componentDidMount() {
    const { address } = this.props;
    this.getLocationFromAddress(address);
  }

  getLocationFromAddress = address => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results.length > 0 && results[0].geometry && results[0].geometry.location) {
        this.setState({
          location: results[0].geometry.location,
          showLoadMapError: false
        });
      } else {
        this.setState({
          showLoadMapError: true
        });
      }
    });
  };

  render() {
    const { location, showLoadMapError } = this.state;
    return (
      <Fragment>
        {location && (
          <GoogleMap defaultZoom={12} defaultCenter={location}>
            {this.props.isMarkerShown && <Marker position={location} />}
          </GoogleMap>
        )}

        {!location && showLoadMapError && <ErrorMessage message={ERROR_MESSAGE} />}
      </Fragment>
    );
  }
}

Map.propTypes = {
  address: PropTypes.string.isRequired
};

export default withScriptjs(withGoogleMap(Map));
