import React from 'react';
import styled from 'styled-components';
import * as Colors from '../Variables/Colors';

export type ButtonColor = 'success' | 'warning' | 'danger' | 'primary';

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  color: ButtonColor;
}

const Button = styled.button<IButtonProps>`
  color: ${Colors.white};
  background-color: ${props => Colors[props.color]};
  border-color: ${props => Colors[props.color]};
  outline: none;

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${props => props.disabled && `background-color: ${Colors.grey};`}
  cursor: pointer;
`;
export default Button;
