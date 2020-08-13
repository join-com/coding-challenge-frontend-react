import React from "react";
import Logo from "../logo.png";

export default (props) => {
  return (
    <div className="heading d-flex justify-content-center align-items-center jumbotron">
      <a href="/" className="logo">
        <img src={Logo} alt="Site Logo" className="rounded-circle" />
      </a>
      <div className="name-plate">
        <h1 className="display-4 m-0">
          Police Department of <strong>Berlin</strong>
        </h1>
        <h4 className="m-0 h3">Stolen Bikes</h4>
      </div>
    </div>
  );
};
