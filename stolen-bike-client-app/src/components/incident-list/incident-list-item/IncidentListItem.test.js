import React from 'react';
import ReactDOM from 'react-dom';
import IncidentListItem from './IncidentListItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IncidentListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});
