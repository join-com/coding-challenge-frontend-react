import api from 'app/redux/api';

export default function createAction(options = {}) {
    const {
        loadingType,
        type,
        apiName,
        defaultReq
    } = options;

    return (data = {}) => {
        return dispatch => {
            dispatch({
                type: loadingType,
                payload: { loading: true }
            });

            (async () => {
                let payload;

                try {
                    const res = await api[apiName]({
                        ...defaultReq,
                        ...data
                    });

                    payload = {
                        status: 'success',
                        ...res.data
                    };
                } catch (error) {
                    payload = {
                        status: 'error',
                        error
                    };
                }

                dispatch({
                    type,
                    payload: {
                        uuid: Date.now(),
                        loading: false,
                        ...payload
                    }
                });
            })();
        };
    };
}
