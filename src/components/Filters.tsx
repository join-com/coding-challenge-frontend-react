import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Filters } from '../modules/interfaces'

const styles = (theme: any) => createStyles({
  wrapper: {
    marginBottom: 20,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item: {
    width: '100%'
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
  isLoading: boolean
}

interface FiltersState {
  filters: Filters
}

class FiltersComponent extends React.Component<FiltersProps, FiltersState> {
  constructor(props: FiltersProps) {
    super(props);
    this.state = {
      filters: props.filters,
    }
  }
  handleQueryChange = (event: any) => (
    this.setState({
      filters: {
        ...this.state.filters,
        query: event.target.value,
      }
    })
  )
  onSubmit = () => this.props.onSubmit(this.state.filters)
  render() {
    const { classes } = this.props;
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
            margin="normal"
          />
        </Grid>
        <Grid item xs={4} sm={3}>

        </Grid>
        <Grid item xs={4} sm={3}>

        </Grid>
        <Grid item xs={4} sm={2} className={classes.cell}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSubmit}
            className={classes.item}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(FiltersComponent);
