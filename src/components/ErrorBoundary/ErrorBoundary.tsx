import React, { Component } from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
`;

const reloadPage = () => document.location.reload();

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  /* eslint-disable jsx-a11y/accessible-emoji */
  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <p>
            Something has gone wrong(
            <br />
            Please try reload the page
          </p>

          <Button type="primary" onClick={reloadPage}>
            Reload
          </Button>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
