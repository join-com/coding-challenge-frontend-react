import React, { useRef } from "react";

import { useGoogleMap, useMap } from "./mapComponent";
const API_KEY = process.env.REACT_APP_API_AUTH;



const Gmap = (props) => {
const initialConfig = {
        zoom: 12,
        center: { lat: props.lat, lng: props.lng }
};
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig });
  return (
    <div
      style={{
        height: "400px",
        width: "100%"
      }}
      ref={mapContainerRef}
    />
  );
};

export default Gmap;