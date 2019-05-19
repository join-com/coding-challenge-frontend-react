import React from 'react'
import moment from 'moment'
import qs from 'query-string'
import { withStyles, createStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { DatePicker } from "@material-ui/pickers"

import { Filters } from '../modules/interfaces'

const styles = (theme: any) => createStyles({
  wrapper: {
    marginBottom: 20,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
  },
});

interface FiltersProps {
  classes: {
    wrapper: string
    cell: string
    item: string
  }
  filters: Filters
  onSubmit: any
  history?: {
    push: any
    location: {
      search: string
    }
  }
  isLoading: boolean
}

interface FiltersState {
  filters: Filters
}

class FiltersComponent extends React.Component<FiltersProps, FiltersState> {
  constructor(props: FiltersProps) {
    super(props);
    this.state = {
      filters: {
        ...props.filters,
        ...(props.history ? qs.parse(props.history.location.search) : ''),
      }
    }
  }
  componentDidMount() {
    this.props.onSubmit(this.state.filters);
  }
  handleQueryChange = (event: any) => (
    this.setState({
      filters: {
        ...this.state.filters,
        query: event.target.value,
      }
    })
  )
  onAfterDateChange = (value: Date | null) => (
    this.setState({
      filters: {
        ...this.state.filters,
        occurred_after: value ? (moment(value).startOf('date').valueOf() / 1000) : undefined,
      }
    })
  )
  onBeforeDateChange = (value: Date | null) => (
    this.setState({
      filters: {
        ...this.state.filters,
        occurred_before: value ? ((moment(value).startOf('date').add(1, 'day').valueOf() / 1000) - 1) : undefined,
      }
    })
  )
  onSubmit = () => {
    const { filters } = this.state;
    this.props.onSubmit(this.state.filters);
    this.props.history && this.props.history.push({
      pathname: '/',
      search: `?${qs.stringify({
        occurred_before: filters.occurred_before,
        occurred_after: filters.occurred_after,
        query: filters.query,
      })}`,
    });
  }
  render() {
    const { classes, isLoading } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} sm={4} className={classes.cell}>
          <TextField
            id="query"
            label="Search case descriptions"
            type="search"
            value={this.state.filters.query}
            onChange={this.handleQueryChange}
            className={classes.item}
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.cell}>
          <DatePicker
            key="occurred_after"
            label="Date from"
            value={this.state.filters.occurred_after ? new Date(this.state.filters.occurred_after * 1000) : null}
            onChange={this.onAfterDateChange}
            className={classes.item}
            clearable
            disableFuture
            maxDate={this.state.filters.occurred_before ? new Date(this.state.filters.occurred_before * 1000) : null}
          />
        </Grid>
        <Grid item xs={6} sm={2} className={classes.cell}>
          <DatePicker
            key="occurred_before"
            label="Date to"
            value={this.state.filters.occurred_before ? new Date(this.state.filters.occurred_before * 1000) : null}
            onChange={this.onBeforeDateChange}
            className={classes.item}
            clearable
            disableFuture
            minDate={this.state.filters.occurred_after ? new Date(this.state.filters.occurred_after * 1000) : null}
          />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.cell}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSubmit}
            className={classes.item}
            disabled={isLoading}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(FiltersComponent);
