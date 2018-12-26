import React from "react";
import PropTypes from "prop-types";
import { StyledErrorText } from "../Text/StyledText";
import { ERROR_MESSAGE } from "../../../constants/global";

const ErrorMessage = ({ message }) => {
  return <StyledErrorText>{message}</StyledErrorText>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string
};

ErrorMessage.defaultProps = {
  message: ERROR_MESSAGE
};

export default ErrorMessage;
