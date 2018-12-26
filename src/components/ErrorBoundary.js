import React, { Component } from "react";

import ErrorMessage from "./ui/ErrorMessage";
import { childrenPropTypes } from "../constants/propTypes";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

ErrorBoundary.protoTypes = {
  children: childrenPropTypes.isRequired
};

export default ErrorBoundary;
