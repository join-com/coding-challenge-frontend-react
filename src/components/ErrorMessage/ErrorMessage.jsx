import React from "react";
import PropTypes from "prop-types";
import { StyledErrorText } from "../ui/Text/StyledText";

const ErrorMessage = ({ message }) => {
  return <StyledErrorText>{message}</StyledErrorText>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string
};

ErrorMessage.defaultProps = {
  message: ""
};

export default ErrorMessage;
