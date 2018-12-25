import styled from "styled-components";
import { defaultInputStyles } from "../../../helpers/stylesMixins";
import { defaultIndent } from "../../../constants/styles";
import StyledText from "../Text/StyledText";

export const StyledSelect = styled.select`
  ${defaultInputStyles};
`;

export const Label = styled(StyledText)`
  padding-right: ${defaultIndent}rem;
`;
