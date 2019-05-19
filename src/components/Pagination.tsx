import React from 'react'
import Pagination from 'material-ui-flat-pagination'

import { withStyles, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

interface PaginationProps {
  classes: {
    wrapper: string
  }
  page: number
  total: number
  isLoading: boolean
  history?: {
    push: any
    location: {
      search: string
    }
  }
}

interface PaginationState {
  offset: number
}

const styles = (theme: any) => createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  }
});

class PaginationComponent extends React.Component<PaginationProps, PaginationState> {
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      offset: (props.page - 1) * 10,
    };
  }
  handleClick = (offset: number) => {
    this.setState({
      offset,
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.props.history && this.props.history.push({
      pathname: `/${1 + (offset / 10)}`,
      search: this.props.history.location.search,
    });
  }
  render() {
    const { isLoading, total, classes } = this.props;

    if (isLoading) {
      return null;
    }

    return (
      <Grid container className={classes.wrapper}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={total}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </Grid>
    )
  }
}

export default withStyles(styles)(PaginationComponent);
