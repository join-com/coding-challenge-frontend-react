import React, { FC } from "react";
import Styled from "styled-components";
import CasesContainer from "../components/CasesContainer";
import FinderBar from "../components/FinderBar";

interface ISearch {
   className?: string;
}

const Search: FC<ISearch> = ({ className }) => <div className={className}>
   <CasesContainer />
</div>;

export default Styled(Search)`
  display: flex;
  height: 100%;
`;
