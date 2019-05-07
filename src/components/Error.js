import React from 'react';

const Error = props => {
    return (<div class="ui segment" id="app-error">
        <img alt="error.png" class="ui centered medium image" src={require('../assets/images/error.png')} />
        <h1 >SOMETHING WENT WRONG!!</h1>
        <h2>Please Search again.</h2>
    </div>)
};

export default Error; 