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

    handleChange = (event) => {
        event.target.name === "occurred_after" ? this.setState({ occurred_after: event.target.value }) : this.setState({ occurred_before: event.target.value })
    }




    render() {
        console.log("State", this.state.proximity);
        return (
            <div className="ui segment" id="searchBox">
                <form className="ui form">
                    <div class="fields">
                        <div class="seven wide field">
                            <label>Location</label>
                            <input type="text" placeholder="Enter an address, zipcode or city" value={this.state.proximity}
                                onChange={(e) => this.setState({ proximity: e.target.value })} />
                        </div>
                        <div class="three wide field">
                            <label>From</label>
                            <div class="ui input left icon">
                                <i class="calendar icon"></i>
                                <input type="date" placeholder="Date/Time" name="occurred_after" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div class="three wide field">
                            <label>To</label>
                            <div class="ui input left icon">
                                <i class="calendar icon"></i>
                                <input type="date" placeholder="Date/Time" name="occurred_before" onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div class="field submit-button">
                        <div className="ui button">Find Cases</div>
                    </div>
                </form>

            </div >
        );
    }
}

export default Search;

