import React, { FC } from "react";
import Styled from "styled-components";

interface IButton {
  className?: string;
  children?: React.ElementType[];
}

const Button: FC<IButton> = ({ className, children }) => <button>{children}</button>;

export default Styled(Button)``;
