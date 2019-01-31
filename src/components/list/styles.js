export const styles = theme => ({
    mainContainer: {
        paddingLeft: 24 + 30,
        // backgroundColor:'#f5f5f5'
    },
    fullPageHeight: {
        minHeight: '100vh'
    },
    totalCasesText: {
        float: 'right',
        marginRight: 10,
        fontSize: 19,
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    error: {
        fontSize: 25,
        color: 'red',
        padding:20
    },
    noRecords : {
        padding : 20
    }
    
})