import React, { FC, useEffect, useState } from "react";
import Styled from "styled-components";
import { fetchAllCases, fetchSourceAll } from "../helpers/Api";
import Case from "../models/ICase";
import TheftCase from "./TheftCase";

interface ICaseContainerProps {
    className?: string;
}
const ITEMS_PER_PAGE = 10;
const CasesContainer: FC<ICaseContainerProps> = ({ className = "" }) => {

const [cases, setCases] = useState(new Array<Case>());
useEffect(() => {
  const doFetchAllCases = async () => {
    const result = await fetchAllCases();
    setCases(result);
  };
  doFetchAllCases();
}, []);
const [currentPage, setcurrentPage] = useState(0);

return <div className={className}>
  {cases.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE - 1).map( (data) => <TheftCase data={data}/>)}
</div>;

};
export default Styled(CasesContainer)`
  max-width: 720px;
  margin: auto;
`;
