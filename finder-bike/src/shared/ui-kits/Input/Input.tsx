import React from 'react';
// import { Text } from '../Text'
import styled from 'styled-components';
import * as Colors from '../Variables/Colors';
import { Icon } from '../Icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IInput {
  label?: string;
  name?: string;
  type?: string;
  onChange?: (e: any) => void;
  defaultValue?: string;
  placeholder?: string;
  icon?: IconProp;
  id?: string;
}

const StyledInputWrapper = styled.div`
  display: grid;
  position: relative;
  max-width: 100%;
  grid-template-columns: auto;
`;

const StyledInputIcon = styled.span`
  display: grid;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 40px;
  align-items: center;
  justify-content: center;
  color: #999;
`;

const StyledInput = styled.input`
  vertical-align: middle;
  max-width: 100%;
  width: 100%;
  border: 0 none;
  background: ${Colors.white};
  color: #666;
  border: 1px solid ${Colors.grey2};
  transition: 0.2s ease-in-out;
  height: 40px;
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  padding: 0 10px;
  border-radius: 0.25rem;
  font-size: 1.3rem;

  ${props => (props.type === 'date' ? 'display: block;' : 'display: grid;')}
  ${props => props.hasIcon && 'padding-left: 40px;'}

  ::selection {
    background: ${Colors.primary};
    color: ${Colors.white};
    text-shadow: none;
  }

  :focus {
    outline: none;
    background-color: ${Colors.white};
    color: ${Colors.black};
    border-color: ${Colors.primary};
  }
`;

function Input({ icon, ...props }: IInput) {
  const renderComponent = () => {
    if (icon) {
      return (
        <>
          <StyledInputIcon>
            <Icon size="2x" icon={icon} />
          </StyledInputIcon>
          <StyledInput hasIcon {...props} />
        </>
      );
    }

    return <StyledInput {...props} />;
  };
  return <StyledInputWrapper>{renderComponent()}</StyledInputWrapper>;
}

export default Input;
