import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "./StylesHeader";
import Heading from "../ui/Heading";
import { Container } from "../ui/Layout/StyledLayout";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <Heading>Police Department of Berlin</Heading>
        </Link>
        <Heading level={3}>Stolen bikes</Heading>
      </Container>
    </StyledHeader>
  );
};

export default Header;
