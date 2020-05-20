import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function BikesPage() {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Typography variant="h3">Police Department of Berlin</Typography>
          <Typography variant="h4">Stolen Bikes</Typography>
        </Box>
        <Box>Date Content</Box>
        <Box>Detail Content</Box>
      </Box>
    </Container>
  );
}

export default BikesPage;
