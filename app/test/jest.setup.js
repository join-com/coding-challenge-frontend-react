import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

//Catch propTypes warnings and throw an exception
// eslint-disable-next-line no-console
const error = console.error;
// eslint-disable-next-line no-console
console.error = (warning, ...args) => {
    if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
        throw new Error(warning);
    }

    error.apply(console, [warning, ...args]);
};

// In Node v7 unhandled promise rejections will terminate the process
if (!process.env.LISTENING_TO_UNHANDLED_REJECTION) {
    process.on('unhandledRejection', reason => {
        throw reason;
    });
    // Avoid memory leak by adding too many listeners
    process.env.LISTENING_TO_UNHANDLED_REJECTION = true;
}
