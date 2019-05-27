import { Typography } from "@material-ui/core";
import React from "react";

const parentStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "46px"
};

export default function Error() {
  return (
    <div style={parentStyle}>
      <Typography color="error">Oops, something went wrong! Please refresh...</Typography>
    </div>
  );
}