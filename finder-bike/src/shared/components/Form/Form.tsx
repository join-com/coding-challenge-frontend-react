import React from 'react';
import styled from 'styled-components';

export const FormContext = React.createContext({});

export interface IForm {
  children: React.ReactNode;
  onSubmit: (e: any) => void;
  inline?: boolean;
}

const StyledFormWrapper = styled.div`
  min-width: 30rem;
`;

const StyledForm = styled.form`
  ${({ inline }) =>
    inline &&
    `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
    justify-content: center;
    align-items: center;
    `}
`;

function Form(props: IForm) {
  const resetValues = e => () => {
    [...e.target.elements].forEach(elm => (elm.value = ''));
  };

  const onSubmit = e => {
    e.preventDefault();
    const resetHandler = resetValues(e);
    const values = [...e.target.elements].reduce((acc, cur) => {
      if (!cur.name) return acc;
      return {
        ...acc,
        [cur.name]: cur.value
      };
    }, {});
    // @ts-ignore
    props.onSubmit(values, resetHandler);
  };
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={onSubmit} inline={props.inline}>
        <FormContext.Provider value={props}>
          {props.children}
        </FormContext.Provider>
      </StyledForm>
    </StyledFormWrapper>
  );
}

export default Form;
