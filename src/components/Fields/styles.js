import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: 5px;
`;

const common = css`
  width: 200px;
  height: 30px;
  font-size: ${props => props.theme.fontMedium};
  display: block;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 4px;
`;

export const Input = styled.input`
  ${common};
`;

export const Select = styled.select`
  ${common};
  text-transform: capitalize;
`;

export const DatetimeWrapper = styled.div`
  input[type='text'] {
    ${common};
    height: 26px;
    padding: 0px 10px;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  color: ${props => props.theme.white};
  display: block;
`;
