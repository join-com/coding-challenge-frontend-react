import * as React from 'react';
import * as _ from 'lodash';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';

import { StateQueryFilter } from '../../containers/state/types';

import './ComIncidentsFilter.scss';


interface Props {
    isBusy: boolean;
    onSearch: (filter: StateQueryFilter) => void;
}

interface State {
    filter: StateQueryFilter;
}

export default class ComIncidentsFilter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            filter: {
                page: 1,
                per_page: 10,
            },
        };
    }

    public componentDidUpdate(propsPrev: Props, statePrev: State): void {
        if (this.state.filter.occurred_before && this.state.filter.occurred_after > this.state.filter.occurred_before) {
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
    }

    private handleChange(field: string, value: any) {
        this.setState({ filter: { ...this.state.filter, [field]: value } });
    }

    public render() {
        return (
            <div className={ `${this.constructor.name} row` }>
                <div className="col-12 col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search case descriptions..."
                        onChange={ (evt: Event) => this.handleChange('query', evt.target.value) }
                        />
                </div>
                <div className="col-6 col-md-2">
                    <DatePicker
                        className="form-control"
                        placeholderText="From"
                        selected={this.state.filter.occurred_after}
                        onChange={ (evt: Date) => this.handleChange('occurred_after', evt.getTime()) }
                        />
                    <span className="fa fa-calendar-alt"></span>
                </div>
                <div className="col-6 col-md-2">
                    <DatePicker
                        className="form-control"
                        placeholderText="To"
                        selected={this.state.filter.occurred_before}
                        onChange={ (evt: Date) => this.handleChange('occurred_before', evt.getTime()) }
                        />
                    <span className="fa fa-calendar-alt"></span>
                </div>
                <div className="col-12 col-md-2">
                    <button
                        className="form-control btn btn-primary"
                        disabled={ this.props.isBusy }
                        onClick={ () => this.onSearch() }
                        >
                        Find cases
                    </button>
                </div>
            </div>
        );
    }

}
