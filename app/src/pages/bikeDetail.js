import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

function BikeDetailPage() {
  const { caseId } = useParams();
  const [caseDetail, setCaseDetail] = useState({});

  useEffect(() => {
    const { data, ok } = api.getById(caseId);
    console.log('params:', caseId, ok, data);
  }, []);

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box marginTop={3}>
          <Typography variant="h3">Police Department of Berlin</Typography>
          <Typography variant="h4">Stolen Bikes</Typography>
        </Box>
        <Box display="flex"></Box>
      </Box>
    </Container>
  );
}

export default BikeDetailPage;
