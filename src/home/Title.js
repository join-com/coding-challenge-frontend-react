import React from "react";
import "../App.css";
import berlin from "../resources/berlin.png";
import Typography from "@material-ui/core/Typography";

const parentStyle = { display: "flex", padding:"16px 0px" };
const logoStyle = { height: "128px" };
const spacerStyle = { width: "16px" };


function Title() {
  return (
    <div style={parentStyle}>
      
      <img src={berlin} style={logoStyle}  alt="berlin-logo"/>

      <div style={spacerStyle}/>

      <div>

        <Typography variant="h3" gutterBottom>
          Police Department of Berlin
        </Typography>

        <Typography variant="h4" gutterBottom>
          Stolen Bykes
        </Typography>

      </div>

    </div>
  );
}

export default Title;
