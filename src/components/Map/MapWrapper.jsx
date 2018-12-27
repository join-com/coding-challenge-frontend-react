import React from "react";
import PropTypes from "prop-types";
import { MapContainerElement, MapElement } from "./StyledMap";
import Map from "./Map";

function MapWrapper({ address }) {
  return (
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
        process.env.REACT_APP_GOOGLE_MAPS_KEY
      }`}
      loadingElement={<MapElement />}
      containerElement={<MapContainerElement />}
      mapElement={<MapElement />}
      address={address}
    />
  );
}

MapWrapper.propTypes = {
  address: PropTypes.string.isRequired
};

export default MapWrapper;
