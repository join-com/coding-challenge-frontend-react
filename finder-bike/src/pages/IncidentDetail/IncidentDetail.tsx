import React, { useEffect } from 'react';
import Header from '../../shared/components/Header/Header';
import { Layout } from '../../shared/components/Layout';
import { format } from 'date-fns';
import Loading from '../../shared/ui-kits/Loading/Loading';
import styled from 'styled-components';
import { Text } from '../../shared/ui-kits/Text';
import { Alert } from '../../shared/ui-kits/Alert';
import { Map } from '../../shared/components/Map';

const StyledHome = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(10rem, 1fr));
  align-items: center;
  grid-row-gap: 2rem;

  @media only screen and (min-width: 680px) {
    grid-template-rows: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export default function IncidentDetail(props) {
  const { data, getIncident, loading, error } = props;
  console.log(props);

  useEffect(() => {
    const { id } = props.match.params;
    getIncident(id);
  }, [getIncident, props.match.params]);

  const renderContent = () => {
    if (loading || !data) return <Loading center />;
    if (data)
      return (
        <>
          <Text size={15} isBlock isBold>
            {data.title}
          </Text>
          <div>
            <Text isBold>Stolen</Text>{' '}
            <Text>
              {format(data.occurred_at, 'MM/DD/YYYY hh:ss a')}{' '}
              <Text isBold>at</Text> {data.address}
            </Text>
          </div>
          <Map
            coordinates={{
              lat: data.geometry.coordinates[1],
              lng: data.geometry.coordinates[0]
            }}
          />
          {data.description && (
            <>
              <Text size={20} isBlock isBold>
                DESCRIPTION OF INCIDENT
              </Text>
              <Text>{data.description}</Text>
            </>
          )}
        </>
      );
    if (error) return <Alert color="danger">{error.message}</Alert>;
  };

  return (
    <Layout>
      <StyledHome>
        <Header />
        {renderContent()}
      </StyledHome>
    </Layout>
  );
}
