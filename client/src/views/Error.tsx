import React, { FC } from "react";
import Styled from "styled-components";

interface IError {
  className?: string;
  errorCode?: string;
  errorTitle?: string;
}

const Error: FC<IError> = ({ className, errorCode, errorTitle }) => <div className={className}>
    <h1> {errorCode} </h1>
    <h2> {errorTitle} </h2>
</div>;

export default Styled(Error)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 8em;
  }
  h2 {
    font-size: 3em;
  }
  h1, h2 {
    display: block;
  }
`;
