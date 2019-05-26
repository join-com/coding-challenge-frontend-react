import * as React from 'react';
import moment from 'moment';

import Link from '../Hyperlink/ComHyperlink';

import * as CONFIG from '../../config';
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
                    <b>{ moment(props.item.occurred_at * 1000).format(CONFIG.DATE_FORMAT) }</b>
                    <br/>
                    <i>{ props.item.address }</i>
                </p>
            </div>
        </div>
    );
};
