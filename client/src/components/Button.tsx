import React, { FC } from "react";
import Styled from "styled-components";

interface IButton {
  className?: string;
  children?: any;
}

const Button: FC<IButton> = ({ className, children }) => <button className={className}>{children}</button>;

export default Styled(Button)`
  border: 0;
  background-color: #5652BF;
  color: white;
  border-radius: 2px;
  padding: 5px 10px;
  box-shadow: 1px 1px 10px -6px black;
  &:hover {
    box-shadow: 1px 1px 10px -3px black;
  }
`;
