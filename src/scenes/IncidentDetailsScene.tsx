import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as R from 'ramda';
import styled from 'styled-components';

import { DEFAULT_PROXIMITY } from 'core/constants';
import { AppState } from 'core/reducers';
import { GeoRequest } from 'core/geo/actions';
import { selectIncident, selectRequesting, selectError } from 'core/incidents/reducer';
import { dateToOrdinalString } from 'core/utils/dateToOrdinalString';
import { Header } from 'components/Header';
import { Map } from 'components/Map';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { IIncident } from 'types';
import { media } from 'ui/media';

interface IOwnProps {
    match: {
        params: {
            id: string;
        };
    };
}

interface StateProps {
    incident: IIncident;
    requesting: boolean;
    error: boolean;
}

interface DispatchProps {
    geoRequest: (occurredAt: number) => void;
}

interface IProps extends StateProps, IOwnProps, DispatchProps {}

const Container = styled.div`
    font-weight: 600;
`;

const Title = styled.div`
	${media.mobile`
    	font-size: 18px;
  	`}

	${media.tablet`
    	font-size: 20px;
	`}

    ${media.desktop`
    	font-size: 22px;
	`}
`;

const Details = styled.div`
    padding: 15px 0;
    font-size: 14px;
`;

const DescriptionTitle = styled.div`
	padding: 15px 0;

	${media.mobile`
		font-size: 18px;
	`}

	${media.tablet`
		font-size: 20px;
	`}

	${media.desktop`
		font-size: 22px;
	`}
`;

const DescriptionContent = styled.div`
	${media.mobile`
    	font-size: 14px;
  	`}

	${media.tablet`
    	font-size: 14px;
	`}

    ${media.desktop`
    	font-size: 14px;
	`}
`;

export class Component extends React.Component<IProps> {
    public componentDidMount() {
        this.geoRequest();
    }

    public componentDidUpdate(prev: IProps) {
        if (prev.incident !== this.props.incident) {
            this.geoRequest();
        }
    }

    public render() {
        const { incident, requesting, error } = this.props;

        if (requesting || error) {
            return (
                <Container>
                    <Header />
                    {requesting && <Loading />}
                    {error && <Error />}
                </Container>
            );
        }

        if (!incident) {
            return null;
        }

        const details = getDetails(incident.occurredAt, incident.address);

        return (
            <Container>
                <Header />
                {incident.title && <Title>{incident.title}</Title>}
                {details && <Details>{details}</Details>}
                {incident.geometry && <Map coordinates={incident.geometry} />}
                {incident.description && <DescriptionTitle>DESCRIPTION OF INCIDENT</DescriptionTitle>}
                {incident.description && <DescriptionContent>{incident.description}</DescriptionContent>}
            </Container>
        );
    }

    private geoRequest() {
        const { incident } = this.props;

        incident && this.props.geoRequest(incident.occurredAt);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => ({
    geoRequest: (occurredAt: number) => {
        dispatch(
            new GeoRequest({
                proximity: DEFAULT_PROXIMITY,
                occurredAfter: occurredAt,
                occurredBefore: occurredAt,
            }),
        );
    },
});

const mapStateToProps = (state: AppState, props: IOwnProps) => ({
    incident: selectIncident(state, R.path(['match', 'params', 'id'], props) || ''),
    requesting: selectRequesting(state),
    error: selectError(state),
});

export const IncidentDetailsScene = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

function getDetails(occurredAt?: number, address?: string): string {
    if (occurredAt && address) {
        return `Stolen ${dateToOrdinalString(occurredAt)} at ${address}`;
    }

    if (occurredAt) {
        return `Stolen ${dateToOrdinalString(occurredAt)}`;
    }

    if (address) {
        return `Stolen at ${address}`;
    }

    return '';
}
