import "leaflet/dist/leaflet.css";
import React, { FC } from "react";
import { Circle, Map, Marker, Popup, TileLayer } from "react-leaflet";
import Styled from "styled-components";

// Import images directly that got missed via the CSS imports above.
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

interface ILeafletMapProps {
    className?: string;
    coordinates?: [number, number];
}
const LeafletMap: FC<ILeafletMapProps> = ({ className, coordinates = [51, 23] }) => {
  const fixedCoordinates: [number, number] = [coordinates[1], coordinates[0]];
  return (<Map center={fixedCoordinates} zoom={13} className={className} >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Circle center={fixedCoordinates} radius={1000} />
  </Map>);
 };

export default Styled(LeafletMap)`
  width: 100%;
  height: 400px;
  background-color: red;
`;
