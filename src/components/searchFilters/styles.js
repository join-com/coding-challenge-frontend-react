export const styles = theme => ({
    main: {
        padding: 5,
        paddingTop: 20
    },

    searchBtn: {
        height: '100%',
        width: '100%',
        borderRadius: 0
    },
    gridPad: {
        padding: 5
    },
    gridPadInner: {
        paddingTop: 5
    },
    dateRangeIcon: {
        fontSize: 38,
        padding: 5,
        // paddingLeft : 10,
        color: 'grey',
        position: 'absolute',
        marginLeft: -55

    },
    cardFooterContent: {
        color: theme.palette.primary.main,
        fontSize: 18,
        fontWeight: 600
    },
    imgHover: {
        opacity: '1 !important'
    },
    searchIcon: {
        fontSize: 35
    },
    title : {
        '&:hover':{
            cursor : 'pointer'
        }

    }

})