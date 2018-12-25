import styled from 'styled-components';
import {fonts, fontSizes, colors} from '../../../constants/styles'


const StyledText = styled.p`
  position: relative;
  font-family: ${fonts.primary};
  font-size: ${({ size = 'normal' }) => fontSizes[size]}rem;
  font-weight: ${({ bold }) => (bold ? 'bold' : 500)};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: ${({ textAlign = 'left' }) => textAlign};
  color: ${({ inverted }) => (inverted ? colors.light : colors.dark)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  margin: ${({ size = 'normal' }) => `0 0 ${fontSizes[size] / 2}rem 0`};
`;

export const StyledErrorText = styled(StyledText)`
  color: ${colors.error};
`;

export default StyledText;
