import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withLastLocation } from 'react-router-last-location';

import Link from '../../components/Hyperlink/ComHyperlink';
import IncIncident from '../../components/Incidents/IncIncident';

import { State as PropsState } from './state/types';
import { Actions, State } from '../../store';

import './AppItemIncident.scss';


interface IProps extends PropsState {
    match: {
        params: {
            itemId: number;
        },
    };
    history: {
        goBack: () => void,
    };
    lastLocation: any;
    doGetIncidentById: Function;
}

interface IState {

}

class AppItemIncident extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.props.doGetIncidentById(this.props.match.params.itemId);
    }

    public render(): React.ReactElement {
        return (
            <div className={ this.constructor.name }>
                { this.props.error && (
                    <h3 className="text-center text-danger mt-5 mb-5">{ this.props.error }</h3>
                ) }
                { this.props.incident && (
                    <IncIncident item={ this.props.incident } />
                ) }
                <div className="text-center mt-3 mb-5">
                    { this.props.lastLocation
                        ? <button className="btn btn-primary" onClick={ () => this.props.history.goBack() }>Go Back</button>
                        : <Link to="/incidents" className="btn btn-primary">Go Back</Link>
                    }
                </div>
            </div>
        );
    }

}


export default withLastLocation(connect(
    (state: State) => ({
        ...state.AppItemIncident,
    }),
    (dispatch: any) => bindActionCreators({
        ...Actions.AppItemIncident,
    }, dispatch),
)(AppItemIncident) as any);
