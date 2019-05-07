import React, { Component } from 'react';


class Search extends Component {
    constructor() {
        super();
        this.state = {
            proximity: '',
            occurred_after: '',
            occurred_before: ''
        }
    }

    onFormSubit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange = (event) => {
        event.target.name === "occurred_after" ? this.setState({ occurred_after: Math.floor(new Date(event.target.value) / 1000) }) : this.setState({ occurred_before: Math.floor(new Date(event.target.value) / 1000) })
    }

    render() {
        console.log("State", this.state.proximity);
        return (
            <div className="ui segment" id="searchBox">
                <form className="ui form" onSubmit={this.onFormSubit}>
                    <div className="fields">
                        <div className="seven wide field">
                            <label>Location</label>
                            <input type="text" placeholder="Enter an address, zipcode or city" value={this.state.proximity}
                                onChange={(e) => this.setState({ proximity: e.target.value })} />
                        </div>
                        <div className="three wide field">
                            <label>From</label>
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input type="date" placeholder="Date/Time" name="occurred_after" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="three wide field">
                            <label>To</label>
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input type="date" placeholder="Date/Time" name="occurred_before" onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="field submit-button">
                        <div className="ui button">Find Cases</div>
                    </div>
                </form>

            </div >
        );
    }
}

export default Search;

