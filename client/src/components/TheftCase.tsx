import React, { FC } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { FormatUTCDate } from "../helpers/Formatters";
import Case from "../models/ICase";

interface ITheftCaseProps {
    className?: string;
    data: Case;
}

const TheftCase: FC<ITheftCaseProps> = ({ className = "", data }) => {
  return <div className={className}>
    <div className="col media">
      <div role="image" className="image" />
    </div>
    <div className="col info">
    <Link to={`/case/${data.id || ""}`} className="title" href="#">{data.title}</Link>
    <p className="description">{data.description}</p>
    <p className="date">{FormatUTCDate(data.occurred_at)}</p>
    </div>
  </div>;
};

export default Styled(TheftCase)`
  border: 1px solid #CCC;
  box-shadow: 0px 0px 30px -22px black;
  width: 100%;
  margin: 20px 10px;
  padding: 10px;
  display: flex;
  .image {
    width: 100%;
    height: 100%;
    flex: 1;
    background-image: url(${({ data }) => data.media.image_thumb || data.media.image_url});
  }
  .title {
    font-size: 1.2em;
  }
  .description {
      padding: 20px 0;
  }
  .col {
      padding: 5px;
      display: flex;
      flex-direction: column;
  }
  .info {
    flex: 4;
  }
  .media {
    flex: 1;
  }
`;
