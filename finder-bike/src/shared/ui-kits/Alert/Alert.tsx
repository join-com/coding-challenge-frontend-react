import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import * as Colors from '../Variables/Colors';

export interface IAlertProps {
  color?: Colors.MainColor;
  children: React.ReactNode;
}

const StyledAlert = styled(Text)<IAlertProps>`
  padding: 1rem;
  color: ${Colors.white};
  background-color: ${({ color }) => Colors[color] || Colors.primary};
  padding: 1rem 2rem;
  color: ${Colors.white};
  min-width: 20rem;
  width: 100%;
`;

function Alert(props: IAlertProps) {
  return <StyledAlert {...props}>{props.children}</StyledAlert>;
}

export default Alert;
