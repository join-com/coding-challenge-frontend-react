import React, { Component } from "react";
import { Link } from "react-router-dom";

class DetailsPage extends Component {
  render() {
    return (
      <div>
        DetailsPage <Link to="/">Home</Link>
      </div>
    );
  }
}

DetailsPage.propTypes = {};

export default DetailsPage;
