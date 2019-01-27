import React from 'react';

import { Alert, Col, List, Row } from 'antd';
import { ICaseData, ICasesData } from '../cases';

interface IProps {
  data: {
    loading: boolean;
    error?: Error;
    value?: ICasesData;
  };
  page: {
    value: number;
    set: React.Dispatch<number>;
  };
  pageSize: number;
}

export const renderItem = (item: ICaseData) => (
  <List.Item key={item.id}>
    <Row gutter={16}>
      <Col span={8}>
        <img src={item.image} alt="bike" width="100%" />
      </Col>
      <Col span={16}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <div>{item.description}</div>
      </Col>
    </Row>
  </List.Item>
);

export const handlePageChange = (setPage: React.Dispatch<number>) => (pageValue: number) => {
  setPage(pageValue);
};

export const CasesList: React.FC<IProps> = ({ data, page, pageSize }) => {
  const { value, error, loading } = data;
  const totalCases = value && value.total;

  if (error) {
    return <Alert showIcon={true} type="error" message="Ooops, something went wrong" />;
  }

  return (
    <>
      <Row type="flex" justify="end">
        <Col>total: {totalCases}</Col>
      </Row>
      <List
        dataSource={value && value.list}
        pagination={{
          current: page.value,
          onChange: handlePageChange(page.set),
          pageSize,
          total: totalCases,
        }}
        renderItem={renderItem}
        itemLayout="vertical"
        loading={loading}
      />
    </>
  );
};
