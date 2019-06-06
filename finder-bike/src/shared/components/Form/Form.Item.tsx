import React from 'react';
import styled from 'styled-components';
import { FormContext } from './Form';
import { Text } from '../../ui-kits/Text';

export interface IFormItem {
  children: React.ReactNode;
  label?: string;
}

const StyledFormItemWrapper = styled.div`
  margin: 1rem 0;

  @media only screen and (min-width: 680px) {
    ${({ inline }) =>
      inline &&
      `
      display: grid;
      grid-template-columns: 10rem 1fr;
      justify-content: start;
      align-items: center;
    `}
  }
`;

function FormItem(props: IFormItem) {
  const values = React.useContext(FormContext);

  return (
    <StyledFormItemWrapper {...values}>
      {props.label && <Text>{props.label}</Text>}
      {props.children}
    </StyledFormItemWrapper>
  );
}

export default FormItem;
