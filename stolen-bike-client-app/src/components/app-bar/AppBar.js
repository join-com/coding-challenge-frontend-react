import React, { Component } from 'react';
import './AppBar.scss';

class AppBar extends Component {
    render() {
        return (
            <div className="appBar">
                <div className="appBar__logo">
                    <span className="appBar__logo--first">STOLEN</span>
                    <span className="appBar__logo--second">BIKES</span>
                </div>
            </div>
        );
    }
}

export default AppBar;
