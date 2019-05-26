import * as React from 'react';

import Link from '../Hyperlink/ComHyperlink';

import { Incident } from '../../interfaces';

import './IncIncident.scss';


const COM_NAME = 'IncIncident';

interface IProps {
    item: Incident;
}

export default (props: IProps): React.ReactElement => {
    return (
        <div className={ `${COM_NAME} row` }>
            <div className="col-3">
                { props.item.media && props.item.media.image_url_thumb && (
                    <img src={ props.item.media.image_url_thumb } />
                ) }
            </div>
            <div className="col-9">
                <h4>
                    <Link to={ `/incidents/item/${props.item.id}` }>{ props.item.title }</Link>
                </h4>
                <p>{ props.item.description }</p>
                <p>
                    { props.item.occurred_at }
                    <br/>
                    { props.item.address }
                </p>
            </div>
        </div>
    );
};
