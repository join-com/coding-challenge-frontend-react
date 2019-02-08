import React from 'react';
import PropTypes from 'prop-types';

import StyledComponent from './_style';

export default function Incident({
    src,
    title,
    description,
    date,
    address
}) {
    return (
        <StyledComponent className="c-incident">
            {
                src
                    ? (
                        <img
                            src={src}
                            alt=""
                            className="c-incident__img"
                        />
                    )
                    : <div className="c-incident__img is-empty" />
            }
            <div className="c-incident__content">
                <h2 className="c-incident__title">{ title }</h2>
                <p>{ description }</p>
                <div className="c-incident__footer">{ (new Date(date)).toLocaleDateString() } { address }</div>
            </div>
        </StyledComponent>
    );
}

Incident.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.number,
    address: PropTypes.string
};
