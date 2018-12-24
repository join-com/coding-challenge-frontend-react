import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div>
        Home <Link to="/case/1">Details</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
