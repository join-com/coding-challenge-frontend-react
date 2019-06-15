import React, { FC } from 'react';
import Styled from 'styled-components';
import TheftCase from './TheftCase';

interface ICaseContainerProps {
    className? :string,
}

const CasesContainer: FC<ICaseContainerProps> = ({ className = ''}) =>
<div className={className}>
  <TheftCase />
</div>

export default Styled(CasesContainer)`
  display: flex;
`;