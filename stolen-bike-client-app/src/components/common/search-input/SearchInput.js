import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

const SearchInput = ({
    name,
    placeholder,
    value,
    icon,
    type,
    onChange
}) => {
    return (
        <div className="inputWrap">
            <img className="inputIco" alt="" src={icon} />
            <input
                placeholder={placeholder}
                name={name}
                value={value}
                type={type}
                onChange={onChange}
            />
        </div>
    );
};

SearchInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
    type: 'text'
};

export default SearchInput;
