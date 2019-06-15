import React, { FC } from 'react';
import Styled from 'styled-components';


interface ITheftCaseProps {
    className?: string
}

const TheftCase: FC<ITheftCaseProps> = ({ className = '' }) => <div className={className}>
  <div className='col'>
    <img alt='bike' src='https://via.placeholder.com/125x125?text=125x125+Square+Button' />
  </div>
  <div className='col'>
  <a className='title' href='#'>title title</a>
  <p className='description'>description description</p>
  <p className='date'>Thuesday 26 May</p>
  </div>
</div>

export default Styled(TheftCase)`
  border: 4px solid black;
  width: 100%;
  margin: 20px 10px;
  padding: 10px;
  display: flex;
  .title {
    font-size: 1.2em;
  }
  .description {
      padding: 20px 0;
  }
  .col {
      padding: 5px;
      display: flex;
      flex-direction: column;
  }
`;