// Core
import React, { PureComponent } from 'react';

// Instruments
import styled from 'styled-components';

const Message = styled.p`color: red;`;

export default class ErrorInfo extends PureComponent {
  render() {
    return (
      <div>
        <Message>Ooops, something went wrong</Message>
      </div>
    );
  }
}
