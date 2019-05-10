import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


export default class IncidentModal extends Component {
    state = {
        modalOpen: false,
        bikeDetails: '',
        loading: true,
        date_stolen: '',
        date_reported: '',
        color: ''
    }

    formatDate = (date) => {

        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString("en-US", options);
    }

    handleOpen = () => { this.setState({ modalOpen: true }) }

    handleClose = () => { this.setState({ modalOpen: false, bikeDetails: '' }); this.toggleModal() }


    toggleModal = () => {
        this.props.onToggle(this.state.modalOpen);
    }
    componentDidMount() {
        let date_stolen = this.formatDate(this.props.bikeDetails.stolen_record.date_stolen);
        let date_reported = this.formatDate(this.props.bikeDetails.stolen_record.created_at);
        this.setState({ modalOpen: this.props.isOpen, bikeDetails: this.props.bikeDetails, date_stolen: date_stolen, date_reported: date_reported });
    }

    render() {
        const { title, photo, name, manufacturer_name, year, url, serial } = this.state.bikeDetails;
        const { bikeDetails } = this.props;

        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
                onClick={this.handleClose}
            >
                <Header icon='bicycle' content='Bike Details' />
                <Modal.Content>
                    <div className="ui items">
                        <div className="item">
                            <div className="image ui large">
                                <img src={photo ? photo : require('../assets/images/not-found-bike.png')} alt="bike" />
                            </div>
                            <div className="content" >
                                <a className="header" href="#">{title}</a>
                                <div className="meta">
                                    <span>Bike Name: </span>
                                    <span >{name ? name : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Bike Manufacturer: </span>
                                    <span>{manufacturer_name ? manufacturer_name : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Year: </span>
                                    <span>{year ? year : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Color: </span>
                                    <span>{this.state.color ? this.state.color : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Stolen On: </span>
                                    <span>{this.state.date_stolen ? this.state.date_stolen : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Case reported On: </span>
                                    <span>{this.state.date_reported ? this.state.date_reported : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Location: </span>
                                    <span>{bikeDetails.stolen_record.location ? bikeDetails.stolen_record.location : "Not Available"}</span>
                                </div>
                                <div className="meta">
                                    <span>Serial No.: </span>
                                    <span>{serial ? serial : "Not Available"}</span>
                                </div>
                                <div className="extra">
                                    Additional Details: {bikeDetails.stolen_record.lock_defeat_description ? bikeDetails.stolen_record.lock_defeat_description : "No Additional Information available"}
                                </div>
                            </div>
                        </div>
                        <div className="ui text container">
                            <div className="ui container">
                                <p>Theft Details</p>
                                <p>{bikeDetails.stolen_record.theft_description ? bikeDetails.stolen_record.theft_description : "No details available"}</p>
                            </div>
                        </div>

                    </div>


                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={this.handleClose} inverted>
                        Close <Icon name='close icon' />
                    </Button>
                    <Button color='blue' href={url} target={"_blank"} inverted>
                        More Details <Icon name='chevron right' />
                    </Button>
                </Modal.Actions>
            </Modal >
        )
    }
}