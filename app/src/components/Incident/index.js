import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import StyledComponent from './_style';

export default function Incident({
    id,
    src,
    title,
    description,
    date,
    address
}) {
    const imsClassName = classnames('c-incident__img', {
        'is-empty': !src
    });

    return (
        <StyledComponent className="c-incident">
            <div className={imsClassName}>
                <Link
                    to={`/incidents/${id}`}
                    className="c-incident__link"
                >
                    <img
                        src={src || 'https://bikeindex.org/assets/revised/bike_photo_placeholder-7e29078bacd4684910d27915d3c46048a7f640b3040b8e2aa0b346fa1accbafe.svg'}
                        alt=""
                    />
                </Link>
            </div>
            <div className="c-incident__content">
                <h2 className="c-incident__title">
                    <Link to={`/incidents/${id}`}>{ title }</Link>
                </h2>
                <p>{ description }</p>
                <div className="c-incident__footer">{ (new Date(date * 1000)).toLocaleDateString() } { address }</div>
            </div>
        </StyledComponent>
    );
}

Incident.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.number,
    address: PropTypes.string
};
