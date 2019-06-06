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
  color: ${props => Colors[props.color] || Colors.black};
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-size: ${({ size }) => (size ? `${size}px` : '1rem')};
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
`;

const TextWithLink = styled.a`
  text-decoration: none;
  ${TextWithoutLink}
`;

function Text(props: IText) {
  if (props.href) return <TextWithLink {...props} />;

  return <TextWithoutLink {...props} />;
}

export default Text;
