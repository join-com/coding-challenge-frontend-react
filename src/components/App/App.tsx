import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Grid from "@material-ui/core/Grid";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { MaybeDate } from "../../types";
import Header from "../Header/Header";

interface Props extends RouteComponentProps {}

const App: React.FunctionComponent<Props> = ({ history }) => {
  const [textQuery, setTextQuery] = useState("");
  const [dateFrom, handleDateFrom] = useState(null as MaybeDate);
  const [dateTo, handleDateTo] = useState(null as MaybeDate);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push(`/?query=${textQuery}`);
  };

  const handleTextQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextQuery(event.target.value);
  };

  return (
    <div
      style={{ minWidth: 800, maxWidth: 1000, margin: "0 auto", padding: 20 }}
    >
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <SearchForm
            onSubmit={handleSubmit}
            onTextQueryChange={handleTextQueryChange}
            textQuery={textQuery}
            dateTo={dateTo}
            dateFrom={dateFrom}
            onDateFromChange={handleDateFrom}
            onDateToChange={handleDateTo}
          />
        </Grid>
        <Grid item xs={12}>
          <SearchResults />
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(App);
