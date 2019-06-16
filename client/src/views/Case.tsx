import React, { FC, useEffect, useState } from "react";
import { match as IMatch } from "react-router-dom";
import Styled from "styled-components";
import Map from "../components/Map";
import { fetchCaseDetails, fetchSourceDetails} from "../helpers/Api";
import Case from "../models/ICase";

interface ICaseMatch {
  id: string;
}
interface ICaseDetailsProps {
    className?: string;
    match: IMatch<ICaseMatch>;
}

const CaseDetails: FC<ICaseDetailsProps> = ({ className, match }) => {
   const [caseData, setCaseData] = useState({} as Case);
   useEffect(() => {
    const doFetchAllCases = async () => {
        const result = await fetchCaseDetails(match.params.id);
        setCaseData(result);
      };
    doFetchAllCases();
   }, []);
   return <div className={className}>
    <h2> {caseData.title} </h2>
    <section>
        <p>
            Stolen {caseData.occured_at}
            <span className="signify">at</span>
            <span className="address">{caseData.address}</span>
       </p>
    </section>
    <section>
        {caseData.feature && <Map coordinates={caseData.feature.geometry.coordinates}/>}
    </section>
    <h2>
      Description of incident
    </h2>
    <p>{caseData.description}</p>
</div>;
};

export default Styled(CaseDetails)`
  padding: 10px;
  h2 {
    font-size: 1.8em;
  }
`;
