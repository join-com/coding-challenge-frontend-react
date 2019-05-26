import * as React from 'react';

import './ComPreloader.scss';


const COM_NAME = 'ComPreloader';

interface IProps {
    loading: boolean;
}

export default (props: IProps): React.ReactElement => {
    return props.loading && (
        <div className={ COM_NAME }>
            <div className="fa fa-spinner fa-spin"></div>
        </div>
    ) || null;
};
