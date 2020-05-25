import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import api from '../utils/api';

function BikeDetailPage() {
  const { caseId } = useParams();
  const [caseDetail, setCaseDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedOk, setIsLoadedOk] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getById(caseId).then(({ data, ok }) => {
      if (!ok) {
        setIsLoadedOk(false);
        setIsLoading(false);
        return;
      }

      setIsLoadedOk(true);
      setCaseDetail(data.incident);
      setIsLoading(false);
    });
  }, []);

  const renderContent = () => {
    if (isLoading) return <Box alignSelf="flex-start">Loading...</Box>;
    if (!isLoading && !isLoadedOk)
      return (
        <Box color="red" alignSelf="flex-start">
          Oops, something went wrong.
        </Box>
      );

    return (
      <Box display="flex" flexDirection="column">
        <Box marginBottom={2}>
          <Typography variant="h4">{caseDetail.title}</Typography>
        </Box>
        <Typography variant="h6">
          Stolen - {moment(caseDetail.occurred_at).format('ddd MMM DD YYYY')} -{' '}
          {caseDetail.address}
        </Typography>
        <Typography variant="h6">
          Reported - {moment(caseDetail.updated_at).format('ddd MMM DD YYYY')}
        </Typography>
        {caseDetail.media && (
          <Box marginTop={2} marginBottom={2}>
            <img src={caseDetail.media.image_url} alt="" width="800px" />
          </Box>
        )}
        {caseDetail.description && (
          <Box>
            <Typography variant="h5">DESCRIPTION OF INCIDENT</Typography>
            {caseDetail.description}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={3}
      >
        <Box marginTop={3} marginBottom={3}>
          <Box marginTop={2} marginBottom={2}>
            <Typography variant="h3">Police Department of Berlin</Typography>
          </Box>
          <Typography variant="h4">Stolen Bikes</Typography>
        </Box>
        {renderContent()}
      </Box>
    </Container>
  );
}

export default BikeDetailPage;
