import React, { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

interface IFinderBarProps {
    className?: string;
}

const FinderBar: FC<IFinderBarProps> = ({ className = "" }) =>
<div className={className}>
  <form>
      <Input type="text" placeholder="Search" postfix="A" />
      <Input type="date" placeholder="From" postfix={<FaCalendarAlt />}/>
      <Input type="date" placeholder="To" postfix={<FaCalendarAlt />}/>
      <Button>Find cases</Button>
  </form>
</div>;

export default Styled(FinderBar)`
  display: flex;
  justify-content: center;
`;
