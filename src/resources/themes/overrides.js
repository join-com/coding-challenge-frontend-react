import { createMuiTheme } from '@material-ui/core/styles';

const mainColor = '#337ab7';

export const theme = createMuiTheme({
    overrides: {
        MuiCardMedia: {
            media: {
                width: 200,
                maxHeight: 200
            }
        },
    },
    palette: {
        primary: {
            main :mainColor
        }
    }
})