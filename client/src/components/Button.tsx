import React, { FC } from "react";
import Styled from "styled-components";

interface IButton {
  className?: string;
  children?: any;
  onClick?: (e: any) => void;
}

const Button: FC<IButton> = ({ className, children, onClick = null }) => <div className={className}>
    <button onClick={(e: any) => {
      e.preventDefault();
      if (onClick) { onClick(e); }
    }
    }>{children}</button>
  </div>;

export default Styled(Button)`
  align-self: center;
  width: 100%;
  button {
    border: 0;
    width: 100%;
    background-color: #5652BF;
    color: white;
    border-radius: 2px;
    padding: 5px 10px;
    box-shadow: 1px 1px 10px -6px black;
    transition: box-shadow 0.314s;
    &:hover {
      box-shadow: 1px 1px 10px -3px black;
    }
  }
`;
