import React, { Component } from 'react';

import "../assets/style/style.css";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            proximity: '',
            occurred_after: '',
            occurred_before: '',
            proximityValid: true,
            fromValid: true,
            toValid: true
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.proximity && this.state.fromValid && this.state.toValid) {
            this.setState({ proximityValid: true, fromValid: true, toValid: true })
            this.props.onSubmit(this.state)
        }
    }

    handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        fieldName === "occurred_after" ? this.setState({ occurred_after: Math.floor(new Date(event.target.value) / 1000) }) : this.setState({ occurred_before: Math.floor(new Date(event.target.value) / 1000) })

        let fromValid = this.state.fromValid;
        let toValid = this.state.toValid;

        switch (fieldName) {

            case "occurred_after":
                fromValid = Math.floor(new Date(fieldValue) / 1000) <= Math.floor(new Date() / 1000);
                break;
            case "occurred_before":
                console.log(fieldValue);
                console.log(this.state.occurred_after);
                toValid = this.state.occurred_after ? Math.floor(new Date(fieldValue) / 1000) > this.state.occurred_after : true;

                break;
            default:
                break;
        }
        this.setState({
            fromValid: fromValid,
            toValid: toValid
        });
    }


    render() {
        const { proximity, proximityValid, fromValid, toValid } = this.state;

        console.log("State", proximity);
        return (
            <div className="ui segment" id="searchBox">

                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="fields">
                        <div className="seven wide field">
                            <label>Location</label>
                            <input type="text" required className={proximityValid ? null : "error"} placeholder="Enter an address, zipcode or city" value={proximity}
                                onChange={(e) => { this.setState({ proximity: e.target.value }) }} />
                            {proximityValid ? null : <div><span className="caret up"></span> <div className="error-text">Location can't be blank</div></div>}

                        </div>
                        <div className="three wide field">
                            <label>From</label>
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input className={fromValid ? null : "error"} type="date" placeholder="Date/Time" name="occurred_after" onChange={this.handleChange} />
                            </div>
                            {fromValid ? null : <div><span className="caret up"></span> <div className="error-text">Please enter a valid date</div></div>}
                        </div>
                        <div className="three wide field">
                            <label>To</label>
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input type="date" className={toValid ? null : "error"} placeholder="Date/Time" name="occurred_before" onChange={this.handleChange} />
                            </div>
                            {toValid ? null : <div><span className="caret up"></span> <div className="error-text">To date cannot be smaller than From Date</div></div>}
                        </div>
                    </div>
                    <div className="field submit-button">
                        <div className="ui button" onClick={this.onFormSubmit}>Find Cases</div>
                    </div>
                </form>

            </div >
        );
    }
}

export default Search;

