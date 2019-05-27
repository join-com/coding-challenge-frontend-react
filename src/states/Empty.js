import { Typography } from "@material-ui/core";
import React from "react";

const parentStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "46px"
};

export default function Empty() {
  return (
    <div style={parentStyle}>
      <Typography>No results...</Typography>
    </div>
  );
}