import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './IncidentListItem.scss';
import Bike from '../../../assets/bykes/1.jpg';

const IncidentListItem = ({ item }) => {
    return (
        <div className="listItem">
            <div className="listItem__img">
                {/* <img className="inputIco" alt="" src={item.img} /> */}
                <img className="inputIco" alt="" src={Bike} />
            </div>
            <div className="listItem__content">
                <div className="listItem__content__title">2017 CANYON BICYCLES INFLITE AL 9.0S</div>
                <div className="listItem__content__others">Bike was locked to a bike rack with an "Asus Bordo Granit X-Plus" lock. After two hours in the gym, it was gone, no trace left. The rack was a bit loose in the ground, it's possible that the thieves tried to pull it out, but failed due to the concrete foundation.</div>
                <div className="listItem__content__footer">
                    <div>
                        <div className="listItem__content__others">Stolen <strong>Mar 9th, 3pm WAT at Berlin, 10117, DE</strong></div>
                        <div className="listItem__content__others">Reported <strong>Mar 9th, 3pm WAT</strong></div>
                    </div>
                    <div className="btn btn-primary">Details</div>
                </div>
            </div>
        </div>
    );
}

IncidentListItem.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

IncidentListItem.defaultProps = {
    type: 'text'
};

export default IncidentListItem;
