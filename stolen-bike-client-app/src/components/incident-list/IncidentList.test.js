import React from 'react';
import ReactDOM from 'react-dom';
import IncidentList from './IncidentList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IncidentList />, div);
    ReactDOM.unmountComponentAtNode(div);
});
