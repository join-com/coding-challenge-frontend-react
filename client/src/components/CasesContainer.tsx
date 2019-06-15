import React, { FC } from "react";
import Styled from "styled-components";
import TheftCase from "./TheftCase";

interface ICaseContainerProps {
    className?: string;
    items?: any[];
}

const CasesContainer: FC<ICaseContainerProps> = ({ className = "", items = [{ id: 1560610834}]}) =>
<div className={className}>
  {items.map( (props) => <TheftCase {...props} />)}
</div>;

export default Styled(CasesContainer)`
  max-width: 720px;
  margin: auto;
`;
