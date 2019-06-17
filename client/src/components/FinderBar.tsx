import React, { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Styled from "styled-components";
import Input from "./Input";

interface IFinderBarProps {
    className?: string;
}

const FinderBar: FC<IFinderBarProps> = ({ className = "" }) =>
<div className={className}>
  <form>
      <Input />
      <Input type="date" postfix={() => <FaCalendarAlt />}/>
      <button>Find cases</button>
  </form>
</div>;

export default Styled(FinderBar)`
  display: flex;
  justify-content: center;
`;
