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
        'is-empty': src
    });

    return (
        <StyledComponent className="c-incident">
            <div className={imsClassName}>
                <Link
                    to={`/incidents/${id}`}
                    className="c-incident__link"
                >
                    {
                        src
                            ? (
                                <img
                                    src={src}
                                    alt=""
                                />
                            )
                            : null
                    }
                </Link>
            </div>
            <div className="c-incident__content">
                <h2 className="c-incident__title">
                    <Link to={`/incidents/${id}`}>{ title }</Link>
                </h2>
                <p>{ description }</p>
                <div className="c-incident__footer">{ (new Date(date)).toLocaleDateString() } { address }</div>
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
