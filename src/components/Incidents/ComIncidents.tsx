import * as React from 'react';
import * as _ from 'lodash';

import ComPaginator from '../Paginator/ComPaginator';
import IncIncident from './IncIncident';

import { ApiList, Incident } from '../../interfaces';

import './ComIncidents.scss';


interface IProps {
    data?: ApiList<Incident[]>;
    base: string;
    onNavigate: (path: string) => void;
}

interface IState {

}

export default class AppListIncidents extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    private onPaginate(page: number, evt?: React.MouseEvent): void {
        this.props.onNavigate(`${this.props.base}/${page}`);
        if (evt) {
            evt.preventDefault();
        }
    }

    public renderResults(): React.ReactElement {
        return (
            <div>
                { _.get(this.props, ['data', 'collection'], []).map((item: Incident, ind: number) => {
                    return (
                        <div key={ ind }><IncIncident item={ item } /></div>
                    );
                }) }
                { this.props.data && this.props.data.pagination
                    ? <ComPaginator
                        urlPattern="/incidents/page/{page}"
                        pagination={ this.props.data.pagination }
                        onNavigate={ (n: number, evt?: React.MouseEvent) => this.onPaginate(n, evt) }
                        />
                    : null
                }
            </div>
        );
    }

    public render(): React.ReactElement {
        return (
            <div className={ this.constructor.name }>
                { this.props.data && this.props.data.collection
                    ? ( this.props.data.collection.length
                        ? this.renderResults()
                        : (<h3 className="text-center text-primary mt-5 mb-5">No results</h3>)
                    ) : null
                }
            </div>
        );
    }

}
