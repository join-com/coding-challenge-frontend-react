import React from "react";
import { Container } from "./ui/Layout/StyledLayout";
import Heading from "./ui/Heading/Heading";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Container>
      <Heading>Page not found</Heading>
      <Link to="/">
        <Heading level={2}>Go to Home Page</Heading>
      </Link>
    </Container>
  );
};

export default Page404;
