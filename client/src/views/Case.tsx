import React, { EffectCallback, FC, Fragment, useEffect, useState } from "react";
import { match as IMatch } from "react-router-dom";
import Styled from "styled-components";
import Map from "../components/Map";
import Spinner from "../components/Spinner";
import { fetchCaseDetails, fetchSourceDetails} from "../helpers/Api";
import { FormatUTCDate } from "../helpers/Formatters";
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
   const [loading, setLoading] = useState(true);
   useEffect(() => {
    const doFetchAllCases = async () => {
        const result = await fetchCaseDetails(match.params.id);
        setCaseData(result);
        setLoading(false);
      };
    doFetchAllCases();
   }, []);
   return <div className={className}>
    {!loading && <Fragment>
      <h2> {caseData.title} </h2>
    <section>
        <p>
            Stolen {FormatUTCDate(caseData.occurred_at)}
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
    </Fragment>}
    {loading && <Spinner />}
</div>;
};

export default Styled(CaseDetails)`
  padding: 10px;
  h2 {
    font-size: 1.8em;
  }
  .signify {
    font-weight: 800;
    margin: 5px;
  }
`;
