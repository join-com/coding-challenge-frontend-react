import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      500: '#41ADDD',
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: {
          500: '#ffffff',
        },
      },
    },
  },
});

export default defaultTheme;
