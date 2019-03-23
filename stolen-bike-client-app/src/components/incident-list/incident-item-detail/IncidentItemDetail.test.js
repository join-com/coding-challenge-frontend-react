import React from 'react';
import ReactDOM from 'react-dom';
import IncidentItemDetail from './IncidentItemDetail';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IncidentItemDetail />, div);
    ReactDOM.unmountComponentAtNode(div);
});
