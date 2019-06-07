import React, { useCallback, useState, useEffect } from 'react';
import Header from '../../shared/components/Header/Header';
import { Layout } from '../../shared/components/Layout';
import { SearchIndients } from '../../shared/components/SearchIndients';
import { IndientsList } from '../../shared/components/IndientsList';
import { getTime } from 'date-fns';
import Loading from '../../shared/ui-kits/Loading/Loading';
import styled from 'styled-components';
import { Page } from '../../shared/components/Page';

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr auto 10rem;
  align-items: center;

  @media only screen and (min-width: 680px) {
    grid-template-rows: 10rem 10rem auto 1fr;
  }
`;

const StyledPage = styled.div`
  width: 25rem;
  justify-self: self-end;
`;

export default function Home(props) {
  const { data, getIncidents, loading } = props;

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

      setParams({ ...params, ..._params });
      resetValues();
    },
    [getIncidents]
  );

  const onClickPage = useCallback(
    nextPage => {
      setParams({ ...params, page: nextPage });
    },
    [setParams]
  );

  useEffect(() => {
    getIncidents({ ...params });
  }, [getIncidents, params]);

  return (
    <Layout>
      <StyledHome>
        <Header />
        <SearchIndients onSubmit={onSearch} />

        {loading && <Loading center />}

        <IndientsList data={data} />
        <StyledPage>
          {data.length > 0 && (
            <Page
              totalItems={100}
              currentPage={params.page}
              maxPages={3}
              onClick={onClickPage}
            />
          )}
        </StyledPage>
      </StyledHome>
    </Layout>
  );
}
