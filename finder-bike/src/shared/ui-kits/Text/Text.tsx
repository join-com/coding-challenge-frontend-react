import React from 'react';
import styled from 'styled-components';
import * as Colors from '../Variables/Colors';

export interface IText {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  color?: string;
  isBold?: boolean;
  href?: string;
  size?: number;
  isBlock?: boolean;
}

const TextWithoutLink = styled.span<IText>`
  color: ${props => props.color && Colors[props.color]};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-size: ${({ size }) => (size ? `${size}px` : '1.3rem')};
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1.5;
`;

const TextWithLink = styled.a`
  text-decoration: none;
  color: ${props => props.color && Colors[props.color]};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-size: ${({ size }) => (size ? `${size}px` : '1.3rem')};
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1.5;
`;

function Text(props: IText) {
  if (props.href) return <TextWithLink {...props} />;

  return <TextWithoutLink {...props} />;
}

export default Text;
