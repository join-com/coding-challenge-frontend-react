import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const parentStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "46px"
};

export default function Progress() {
  return <div style={parentStyle}><CircularProgress /></div>;
}