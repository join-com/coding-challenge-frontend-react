import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


export default class IncidentModal extends Component {
    state = { modalOpen: false, bikeDetails: '', loading: true, date_stolen: '', date_reported: '', color: '' }

    formatDate = (date) => {
        console.log("date is", date);
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
        console.log("PROPSSS", this.props);
        console.log("STATE", this.state.bikeDetails);

        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='bicycle' content='Bike Details' />
                <Modal.Content>
                    <div class="ui items">
                        <div class="item">
                            <div class="image ui large">
                                <img src={photo ? photo : require('../assets/images/not-found-bike.png')} />
                            </div>
                            <div class="content" >
                                <a class="header" style={{ color: '#ffffff' }}>{title}</a>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Bike Name: </span>
                                    <span style={{ color: '#ffffff' }}>{name}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Bike Manufacturer: </span>
                                    <span style={{ color: '#ffffff' }}>{manufacturer_name}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Year: </span>
                                    <span style={{ color: '#ffffff' }}>{year}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Color: </span>
                                    <span style={{ color: '#ffffff' }}>{this.state.color}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Stolen On: </span>
                                    <span style={{ color: '#ffffff' }}>{this.state.date_stolen}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Case reported On: </span>
                                    <span style={{ color: '#ffffff' }}>{this.state.date_reported}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Location: </span>
                                    <span style={{ color: '#ffffff' }}>{this.props.bikeDetails.stolen_record.location}</span>
                                </div>
                                <div class="meta">
                                    <span style={{ color: '#ffffff' }}>Serial No.: </span>
                                    <span style={{ color: '#ffffff' }}>{serial}</span>
                                </div>
                                <div class="extra" style={{ color: '#ffffff' }}>
                                    Additional Details: {this.props.bikeDetails.stolen_record.lock_defeat_description}
                                </div>
                            </div>
                        </div>
                        <div class="ui text container">
                            <div class="ui container">
                                <p>Theft Details</p>
                                <p>{this.props.bikeDetails.stolen_record.theft_description}</p>
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