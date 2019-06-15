import React, { FC, useState, useEffect } from "react";
import Styled from "styled-components";
import { fetchAllCases, fetchAllCasesSource } from '../helpers/Api';
import TheftCase from "./TheftCase";
import Case from '../models/Case';

interface ICaseContainerProps {
    className?: string;
}
const ITEMS_PER_PAGE = 10;
const CasesContainer: FC<ICaseContainerProps> = ({ className = '' }) => {

const [cases, setCases] = useState(new Array<Case>());
useEffect(() => {
  const doFetchAllCases = async () => {
    const result = await fetchAllCases()
    setCases(result)
  }
  doFetchAllCases()
  return () => fetchAllCasesSource.cancel()
})
const [currentPage, setcurrentPage] = useState(0);

return <div className={className}>
  {cases.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE - 1).map( (data) => <TheftCase data={data}/>)}
</div>;

}
export default Styled(CasesContainer)`
  max-width: 720px;
  margin: auto;
`;
