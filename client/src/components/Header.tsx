import React, { FC } from "react";
import Styled from "styled-components";
// Use double resolution for retina display
import logo from "../assets/images/logo.png";
interface IHeaderProps {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ className = "" }) =>
<header className={className}>
  <div className="logo">
    <img alt="Berlin Police Logo" src={logo} />
  </div>
  <div className="titles">
    <h1>Police Department of Berlin</h1>
    <h2>Stolen Bikes</h2>
  </div>
</header>;

export default Styled(Header)`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  .logo {
    display: flex;
    img {
      margin: auto;
      padding: 10px;
      max-height: 90px;
    }
  }
  .titles {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.2em;
    }
  }
`;
