import React from 'react';
import styled from 'styled-components';
import * as Colors from '../Variables/Colors';

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  color: Colors.MainColor;
  disabled?: boolean;
  type?: string;
  isFull?: boolean;
}

const StyledButton = styled.button<IButtonProps>`
  color: ${Colors.white};
  background-color: ${(props: IButtonProps) => Colors[props.color]};
  border-color: ${(props: IButtonProps) => Colors[props.color]};
  outline: none;

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.3rem;
  line-height: 2;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${(props: IButtonProps) =>
    props.disabled && `background-color: ${Colors.grey};`}
  cursor: pointer;

  ${({ isFull }) => isFull && 'width: 100%'}
`;

export default function Button(props: IButtonProps) {
  return <StyledButton {...props} />;
}
