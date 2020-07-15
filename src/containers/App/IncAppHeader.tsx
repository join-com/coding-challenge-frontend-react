import * as React from 'react';

import Link from '../../components/Hyperlink/ComHyperlink';

import './IncAppHeader.scss';


const COM_NAME = 'IncAppHeader';

interface IProps {
    logo: string;
    title: string;
    subtitle: string;
}

export default (props: IProps): React.ReactElement => {
    return (
        <div className={ `${COM_NAME} row` }>
            <div className="col-3 col-xs-4 col-lg-2 pt-2 pl-3">
                <Link to="/">
                    <img className="logo" src={ props.logo } />
                </Link>
            </div>
            <div className="col-9 col-xs-8 col-lg-10">
                <h1>{ props.title }</h1>
                <h2>{ props.subtitle }</h2>
            </div>
        </div>
    );
};
