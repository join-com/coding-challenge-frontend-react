import React, { Component, Fragment } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Button } from 'antd';

const reloadPage = () => document.location.reload();

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          textBlock={
            <Fragment>
              Something has gone wrong(
              <br />
              Please reload the page
            </Fragment>
          }
          actionsBlock={
            <Button type="primary" onClick={reloadPage}>
              Reload
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
