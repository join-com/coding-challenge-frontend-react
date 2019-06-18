import React, { FC } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { FormatUTCDate } from "../helpers/Formatters";
import Case from "../models/ICase";
import ImagePlaceHolder from "../assets/images/no-image.jpg";

interface ITheftCaseProps {
    className?: string;
    data: Case;
}

const TheftCase: FC<ITheftCaseProps> = ({ className = "", data }) => {
  return <div className={className}>
    <div className="col info">
      <Link to={`/case/${data.id || ""}`} className="title" href="#">{data.title}</Link>
      <div className="col media">
        <div role="image" className="image" />
      </div>
      <p className="description">{data.description}</p>
      <p className="date">{FormatUTCDate(data.occurred_at)}</p>
      <Link to={`/case/${data.id || ""}`} className="title" href="#">Show More ></Link>
    </div>
  </div>;
};

export default Styled(TheftCase)`
  border: 1px solid #CCC;
  border-radius: 4px;
  box-shadow: 0px 0px 30px -22px black;
  max-width: 400px;
  width: 400px;
  margin: 15px;
  height: 400px;
  padding: 10px;
  display: flex;
  .image {
    width: 100%;
    height: 100%;
    flex: 1;
    background-image: url(${({ data }) => data.media.image_thumb || data.media.image_url || ImagePlaceHolder });
    background-size: cover;
    background-position: 50%;
  }
  .title {
    font-size: 1.2em;
    font-weight: 800;
    text-decoration: none;
    color: #3232DF;
  }
  .description {
    padding: 4px 0;
    height: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
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
    width: 100%;
    height: 180px;
  }
`;
