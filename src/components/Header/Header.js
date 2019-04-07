// Core
import React, { PureComponent } from 'react';

// Instruments
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const Img = styled.div`align-self: center;`;

export default class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Img>
          <img src={logo} alt="logo" />
        </Img>
        <div>
          <h1>Police Department of Berlin</h1>
          <h2>Stolen bikes</h2>
        </div>
      </Wrapper>
    );
  }
}
