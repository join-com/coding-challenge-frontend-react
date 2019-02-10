import React from 'react';
import PropTypes from 'prop-types';

import Input from 'app/components/Input';
import Button from 'app/components/Button';

import StyledComponent from './_style';

export default function Filter({
    handleInputChange,
    handleSubmit,
    formData
}) {
    return (
        <StyledComponent
            className="c-filter"
            onSubmit={handleSubmit}
        >
            <Input
                classNameMod="search"
                name="query"
                placeholder="Search"
                onChange={handleInputChange}
                value={formData.query}
            />
            <Input
                classNameMod="date"
                placeholder="From"
                type="date"
                name="occurred_after"
                onChange={handleInputChange}
                value={formData.occurred_after}
            />
            <Input
                classNameMod="date"
                placeholder="To"
                type="date"
                name="occurred_before"
                onChange={handleInputChange}
                value={formData.occurred_before}
            />
            <Button type="submit">Find case</Button>
        </StyledComponent>
    );
}

Filter.propTypes = {
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    formData: PropTypes.object
};
