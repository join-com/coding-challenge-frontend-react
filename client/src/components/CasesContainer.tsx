import React, { FC, useEffect, useState } from "react";
import Styled from "styled-components";
import Spinner from "../components/Spinner";
import { fetchAllCases, fetchSourceAll } from "../helpers/Api";
import Case from "../models/ICase";
import TheftCase from "./TheftCase";

interface ICaseContainerProps {
    className?: string;
}
const ITEMS_PER_PAGE = 10;
const CasesContainer: FC<ICaseContainerProps> = ({ className = "" }) => {

const [cases, setCases] = useState(new Array<Case>());
const [loading, setLoading] = useState(true);
useEffect(() => {
  const doFetchAllCases = async () => {
    const result = await fetchAllCases();
    setCases(result);
    setLoading(false);
  };
  doFetchAllCases();
  setLoading(true);
}, []);
const [currentPage, setcurrentPage] = useState(0);

return <div className={className}>
  {!loading && cases.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE - 1).map( (data) => <TheftCase data={data}/>)}
  {loading && <Spinner />}
</div>;

};
export default Styled(CasesContainer)`
  max-width: 720px;
  margin: auto;
`;
