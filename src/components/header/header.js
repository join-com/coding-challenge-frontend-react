import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/images/police_logo.png';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./styles";

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <div className={classes.logo}>
                        <a href="/list">
                            <img src={logo} />
                        </a>
                    </div>

                    <div>
                        <Typography variant="h2" color="inherit">
                            <a href="/list">
                                {`Police Department of Berlin`}
                            </a>

                        </Typography>
                        <Typography variant="h4" color="inherit">
                            {`Stolen Bikes`}
                        </Typography>
                    </div>

                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);
