import React from 'react';
import styled from 'styled-components';

export const FormContext = React.createContext({});

export interface IForm {
  children: React.ReactNode;
  onSubmit: (e: any) => void;
  inline?: boolean;
}

const StyledFormWrapper = styled.div`
  width: 30rem;
`;

const StyledForm = styled.form``;

function Form(props: IForm) {
  const onSubmit = e => {
    e.preventDefault();
    const values = [...e.target.elements].reduce((acc, cur) => {
      if (!cur.name) return acc;
      return {
        ...acc,
        [cur.name]: cur.value
      };
    }, {});

    props.onSubmit(values);
  };
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <FormContext.Provider value={props}>
          {props.children}
        </FormContext.Provider>
      </StyledForm>
    </StyledFormWrapper>
  );
}

export default Form;
