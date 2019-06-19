import React, { FC } from "react";
import Styled from "styled-components";

interface ISpinner {
    className?: string;
}

const Spinner: FC<ISpinner> = ({ className = "" }) => <div className={className}>
  <svg viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"/>
</svg>
</div>;

export default Styled(Spinner)`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  svg {
    display: flex;
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
  }
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }`;
