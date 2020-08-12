import React from "react";
import Logo from "../../logo.png";

export default (props) => {
  return (
    <div className="heading my-4 d-flex justify-content-center align-items-center">
      <img src={Logo} alt="Site Logo" className="logo mx-3 rounded-circle" />
      <div className="name-plate">
        <h1 className="display-4 m-0">Police Department of Berlin</h1>
        <h4 className="m-0 h3">Stolen Bikes</h4>
      </div>
    </div>
  );
};
