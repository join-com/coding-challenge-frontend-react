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
    detailScreen: {
        padding: 10,
        paddingTop: 30
    },
    map: {
        height: 500,
        width: '80%',
        border: '1px solid grey',
        margin: '30px 0 30px 0'

    },
    descriptions: {
        width: '80%'
    },
    subHeading: {
        marginTop: 10,
        '& span': {
            fontWeight: 600
        }
    },
    error: {
        fontSize: 25,
        color: 'red',
        padding:20
    }
})