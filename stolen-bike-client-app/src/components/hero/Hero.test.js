import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './Hero';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div);
    ReactDOM.unmountComponentAtNode(div);
});
