import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
`;

type ErrorPageProps = {
  textBlock: React.ReactNode;
  actionsBlock: React.ReactNode;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ textBlock, actionsBlock }) => (
  <Wrapper>
    <p>{textBlock}</p>

    {actionsBlock}
  </Wrapper>
);

export default ErrorPage;
