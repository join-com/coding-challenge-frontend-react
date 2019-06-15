import React, { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Styled from "styled-components";

interface IFinderBarProps {
    className?: string;
}

const FinderBar: FC<IFinderBarProps> = ({ className = "" }) =>
<div className={className}>
  <form>
      <input />
      <FaCalendarAlt />
      <input type="date" placeholder="From" />
      <FaCalendarAlt />
      <input type="date" />
      <button>Find cases</button>
  </form>
</div>;

export default Styled(FinderBar)`
  display: flex;
  justify-content: center;
  input {
    background: white;
    font-size: 0.8em;
    margin: 4px;
    &[type="date"] {
      width: 80px;
    }
  }
`;
