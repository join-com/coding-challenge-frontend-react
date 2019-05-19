import React from 'react';
import ReactDOM from 'react-dom';
import { Incidents } from '../Incidents';

it('renders without crashing', (): void => {
    const div = document.createElement('div');
    ReactDOM.render(<Incidents />, div);
    ReactDOM.unmountComponentAtNode(div);
});
