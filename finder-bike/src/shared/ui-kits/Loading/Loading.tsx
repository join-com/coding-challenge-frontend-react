import React from 'react';
import styled from 'styled-components';

export interface ILoading {
  center?: boolean;
}

const StyledLoadingWrapper = styled.div`
  height: 100%;

  ${({ center }) =>
    center &&
    `
    justify-content: center;
    align-items: center;
    display: grid;
    margin: 1rem 0;
  `}
`;

const StyledLoading = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid rgba(29, 161, 242, 0.2);
  border-left-color: rgb(29, 161, 242);
  border-radius: 50%;
  background: transparent;
  animation-name: rotate-s-loader;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
  position: relative;

  @keyframes rotate-s-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading(props: ILoading) {
  return (
    <StyledLoadingWrapper {...props}>
      <StyledLoading />
    </StyledLoadingWrapper>
  );
}
