import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { KeyboardDatePicker } from '@material-ui/pickers';

import ListCard from '../components/listCard';
import api from '../utils/api';

function BikesPage() {
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(Date.now());
  const [searchText, setSearchText] = useState('');
  const [incidents, setIncidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedOk, setIsLoadedOk] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    handleSearch();
  }, []);

  const handleFindCases = () => {
    handleSearch();
  };

  const handleSearch = () => {
    return api
      .get(currentPage, fromDate, toDate, searchText)
      .then(({ ok, data }) => {
        if (!ok) {
          setIsLoadedOk(false);
          return;
        }

        setIsLoadedOk(true);
        setIsLoading(false);
        setIncidents(data.incidents);
      });
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const renderList = () => {
    if (isLoading) return <Box alignSelf="flex-start">Loading...</Box>;
    if (!isLoading && !isLoadedOk)
      return (
        <Box color="red" alignSelf="flex-start">
          Oops, something went wrong.
        </Box>
      );
    if (!incidents.length) return <Box alignSelf="flex-start">No Results</Box>;

    return (
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="h6">total: {incidents.length}</Typography>
        </Box>
        <Box>
          {incidents.map((incident) => (
            <ListCard key={incident.id} incident={incident} />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box marginTop={3}>
          <Box marginTop={2} marginBottom={2}>
            <Typography variant="h3">Police Department of Berlin</Typography>
          </Box>
          <Typography variant="h4">Stolen Bikes</Typography>
        </Box>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          marginTop={3}
          marginBottom={3}
        >
          <Box minWidth="40%">
            <TextField
              id="standard-basic"
              fullWidth
              value={searchText}
              label="Search case descriptions"
              onChange={handleTextChange}
            />
          </Box>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/yyyy"
            margin="normal"
            id="search-date-from"
            label="From"
            value={fromDate}
            onChange={setFromDate}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/DD/yyyy"
            margin="normal"
            id="search-date-to"
            label="To"
            value={toDate}
            onChange={setToDate}
          />
          <Button variant="contained" color="primary" onClick={handleFindCases}>
            Find Cases
          </Button>
        </Box>
        {renderList()}
      </Box>
    </Container>
  );
}

export default BikesPage;
