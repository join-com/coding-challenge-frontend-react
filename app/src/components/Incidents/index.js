import React from 'react';
import PropTypes from 'prop-types';

import Incident from 'app/components/Incident';

import StyledComponent from './_style';

export default function Incidents({
    list
}) {
    if (!list || !list.length) {
        return null;
    }

    return (
        <StyledComponent>
            {
                list.map(item => (
                    <Incident
                        key={item.id}
                        src={item.media.image_url_thumb}
                        title={item.title}
                        description={item.description}
                        address={item.address}
                        date={item.occurred_at}
                    />
                ))
            }
        </StyledComponent>
    );
}

Incidents.propTypes = {
    list: PropTypes.array
};
