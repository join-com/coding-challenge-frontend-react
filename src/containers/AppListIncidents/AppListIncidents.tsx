import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ComPreloader from '../../components/Preloader/ComPreloader';
import ComIncidents from '../../components/Incidents/ComIncidents';
import ComIncidentsFilter from '../../components/IncidentsFilter/ComIncidentsFilter';

import { State as PropsState, StateQueryFilter } from './state/types';
import { Actions, State } from '../../store';

import 'react-datepicker/dist/react-datepicker.css';
import './AppListIncidents.scss';


interface IProps extends PropsState {
    match: {
        params: {
            page: string;
        },
    };
    doFetchIncidents: Function;
    doSetFilter: Function;
    doPaginate: Function;
}

interface IState {

}

class AppListIncidents extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.doPaginate(parseInt(this.props.match.params.page, 10) || 1);
    }

    public componentDidUpdate(propsPrev: IProps, statePrev: IState) {
        if (this.props.match.params.page !== propsPrev.match.params.page) {
            this.props.doPaginate(parseInt(this.props.match.params.page, 10));
        }
        if (this.props.filter !== propsPrev.filter) {
            this.props.doFetchIncidents(this.props.filter);
        }
    }

    public onSearch(filter: StateQueryFilter): void {
        (this.props as any).history.push('/incidents/page/1');
        this.props.doSetFilter(filter);
    }

    public render(): React.ReactElement {
        return (
            <div className={ this.constructor.name }>
                <div className="mt-3 mb-3">
                    <ComIncidentsFilter onSearch={ (filter: StateQueryFilter) => this.onSearch(filter) } />
                </div>
                { this.props.error && (
                    <h3 className="text-center text-danger mt-5 mb-5">{ this.props.error }</h3>
                ) }
                <ComPreloader loading={ this.props.isBusy } />
                <ComIncidents
                    data={ this.props.incidents }
                    base="/incidents/page"
                    onNavigate={ (path: string) => (this.props as any).history.push(path) }
                    />
            </div>
        );
    }

}


export default connect(
    (state: State) => ({
        ...state.AppListIncidents,
    }),
    (dispatch: any) => bindActionCreators({
        ...Actions.AppListIncidents,
    }, dispatch),
)(AppListIncidents);
