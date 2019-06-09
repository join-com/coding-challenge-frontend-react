import React from 'react';
import styled from '@emotion/styled';

import { Input, DatePicker, Button } from 'antd';

const { RangePicker } = DatePicker;

const FormWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

type FormElemProps = {
  wide?: boolean;
  width?: number;
};

const FormElem = styled.div<FormElemProps>`
  width: ${props => (props.wide ? '100%' : props.width + 'px')};
  flex-shrink: ${props => (props.width ? 0 : undefined)};

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const FilterRow: React.FC = () => (
  <FormWrapper>
    <FormElem wide>
      <Input placeholder="Input description..." />
    </FormElem>

    <FormElem width={280}>
      <RangePicker />
    </FormElem>

    <Button type="primary">Find cases</Button>
  </FormWrapper>
);

export default FilterRow;
