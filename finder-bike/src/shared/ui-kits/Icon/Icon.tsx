import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IIcon {
  icon: IconProp;
  color?: string;
  size?: string;
}

const StyledIcon = styled(FontAwesomeIcon)<IIcon>``;

function Icon(props: IIcon) {
  return <StyledIcon {...props} />;
}

export default Icon;
