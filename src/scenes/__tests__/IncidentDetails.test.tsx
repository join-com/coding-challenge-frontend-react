import React from 'react';
import ReactDOM from 'react-dom';
import { IncidentDetails } from '../IncidentDetails';

it('renders without crashing', (): void => {
    const div = document.createElement('div');
    ReactDOM.render(<IncidentDetails />, div);
    ReactDOM.unmountComponentAtNode(div);
});
