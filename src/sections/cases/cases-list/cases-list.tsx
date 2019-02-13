import { gql } from 'apollo-boost';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import { Alert, Col, List, Row } from 'antd';
import { ICaseData, ICasesData } from '../cases';

interface IUIProps {
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
      <Col span={8}>{item.image && <img src={item.image} alt="bike" width="100%" />}</Col>
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

export const CasesListUI: React.FC<IUIProps> = ({ data, page, pageSize }) => {
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

interface IProps {
  filters: {
    query: string;
  };
  page: {
    value: number;
    set: React.Dispatch<number>;
  };
  pageSize: number;
}

const QUERY = gql`
  query getCases($query: String, $page: Int, $pageSize: Int) {
    getCases(query: $query, page: $page, pageSize: $pageSize) {
      total
      list {
        id
        image
        title
        description
        content
      }
    }
  }
`;

export const CasesList: React.FC<IProps> = ({ filters, page, pageSize }) => {
  const data = useQuery(QUERY, { suspend: false, variables: { query: filters.query, page: page.value, pageSize } });

  return <CasesListUI data={{ ...data, value: data.data.getCases }} page={page} pageSize={pageSize} />;
};
