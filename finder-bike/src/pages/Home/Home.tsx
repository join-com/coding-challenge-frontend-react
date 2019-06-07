import React, { useCallback, useState, useEffect } from 'react';
import Header from '../../shared/components/Header/Header';
import { Layout } from '../../shared/components/Layout';
import { SearchIndients } from '../../shared/components/SearchIndients';
import { IndientsList } from '../../shared/components/IndientsList';
import { getTime } from 'date-fns';
import Loading from '../../shared/ui-kits/Loading/Loading';
import styled from 'styled-components';
import { Page } from '../../shared/components/Page';
import { Text } from '../../shared/ui-kits/Text';
import { Alert } from '../../shared/ui-kits/Alert';
//     grid-template-rows: 10rem 10rem 0.3fr auto 1fr;
const StyledHome = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  grid-row-gap: 2rem;

  @media only screen and (min-width: 680px) {
    grid-template-rows: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

const StyledPage = styled.div`
  width: 25rem;
  justify-self: self-end;
`;

const StyledCount = styled(Text)`
  justify-self: self-end;
`;

export default function Home(props) {
  const { data, getIncidents, loading, error, emptyData, hasData } = props;

  const [params, setParams] = useState({ per_page: 10, page: 1 });

  const getTimeFromString = date => getTime(new Date(date));

  const onSearch = useCallback(
    (values, resetValues) => {
      const _params = {
        ...values,
        occurred_after: values.occurred_after
          ? getTimeFromString(values.occurred_after)
          : undefined,
        occurred_before: values.occurred_before
          ? getTimeFromString(values.occurred_before)
          : undefined
      };

      setParams(p => ({ ...p, ..._params }));
      resetValues();
    },
    [setParams]
  );

  const onClickPage = useCallback(
    nextPage => {
      setParams(p => ({ ...p, page: nextPage }));
    },
    [setParams]
  );

  useEffect(() => {
    getIncidents({ ...params });
  }, [getIncidents, params]);

  const renderContent = () => {
    if (loading || !data) return <Loading center />;
    if (hasData)
      return (
        <>
          <StyledCount>Total: XXX results</StyledCount>
          <IndientsList data={data} />
        </>
      );
    if (error) return <Alert color="danger">{error.message}</Alert>;
    if (emptyData) return <Alert color="warning">Not found !</Alert>;
  };

  return (
    <Layout>
      <StyledHome>
        <Header />
        <SearchIndients onSubmit={onSearch} />

        {renderContent()}

        <StyledPage>
          {hasData && (
            <Page
              totalItems={100}
              currentPage={params.page}
              pageSize={params.per_page}
              maxPages={3}
              onClick={onClickPage}
            />
          )}
        </StyledPage>
      </StyledHome>
    </Layout>
  );
}
