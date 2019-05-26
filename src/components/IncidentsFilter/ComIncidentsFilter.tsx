import * as React from 'react';
import * as _ from 'lodash';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';

import * as CONFIG from '../../config';
import { StateQueryFilter } from '../../containers/AppListIncidents/state/types';

import './ComIncidentsFilter.scss';


interface IProps {
    onSearch: (filter: StateQueryFilter) => void;
}

interface IState {
    isDisabled: boolean;
    filter: StateQueryFilter;
}

export default class ComIncidentsFilter extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            isDisabled: true,
            filter: {
                page: 1,
                per_page: CONFIG.INCIDENTS_PAGE_SIZE,
            },
        };
    }

    public componentDidUpdate(propsPrev: IProps, statePrev: IState): void {
        if (
            this.state.filter !== statePrev.filter
            &&
            _.get(this.state.filter, ['occurred_after'], 0) > _.get(this.state.filter, ['occurred_before'], Number.MAX_SAFE_INTEGER)
        ) {
            toast(
                'Note: the specified dates range is empty.',
                {
                    autoClose: 10000,
                    type: toast.TYPE.WARNING,
                    hideProgressBar: true,
                },
            );
        }
    }

    private onSearch(): void {
        this.props.onSearch({
            ...this.state.filter,
            occurred_after: this.state.filter.occurred_after && this.state.filter.occurred_after / 1000 || undefined,
            occurred_before: this.state.filter.occurred_before && this.state.filter.occurred_before / 1000 || undefined,
        });
        this.setState({ isDisabled: true });
    }

    private handleChange(field: string, value: any) {
        this.setState({
            isDisabled: false,
            filter: { ...this.state.filter, [field]: value },
        });
    }

    public render() {
        return (
            <div className={ `${this.constructor.name} row` }>
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search case descriptions..."
                        onChange={ (evt: React.ChangeEvent) => this.handleChange('query', (evt.target as HTMLInputElement).value) }
                        />
                </div>
                <div className="col-6 col-md-2">
                    <DatePicker
                        className="form-control"
                        placeholderText="From"
                        selected={ this.state.filter.occurred_after && new Date(this.state.filter.occurred_after) || null }
                        onChange={ (evt: Date) => this.handleChange('occurred_after', evt && evt.getTime()) }
                        />
                    <span className="fa fa-calendar-alt"></span>
                </div>
                <div className="col-6 col-md-2">
                    <DatePicker
                        className="form-control"
                        placeholderText="To"
                        selected={ this.state.filter.occurred_before && new Date(this.state.filter.occurred_before) || null }
                        onChange={ (evt: Date) => this.handleChange('occurred_before', evt && evt.getTime()) }
                        />
                    <span className="fa fa-calendar-alt"></span>
                </div>
                <div className="col-12 col-md-2">
                    <button
                        className="form-control btn btn-primary"
                        disabled={ this.state.isDisabled }
                        onClick={ () => this.onSearch() }
                        >
                        Find cases
                    </button>
                </div>
            </div>
        );
    }

}
