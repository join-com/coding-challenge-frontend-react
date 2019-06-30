import styled from 'styled-components';
import { DatePicker, Input, Button, List } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
`;

export const ContainerLeftAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 200px;
  text-align: left;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  background-color: #fafafa;
`;

export const StyledList = styled(List)`
  width: calc(100vw - 400px);
`;

export const StyledInput = styled(Input)`
  margin: 10px;
`;

export const StyledDatePicker = styled(DatePicker.RangePicker)`
  margin: 10px;
`;
export const StyledButton = styled(Button)`
  margin: 10px;
`;
export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
