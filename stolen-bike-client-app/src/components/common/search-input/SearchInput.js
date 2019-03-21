import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

const InputGroup = ({
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

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
    type: 'text'
};

export default InputGroup;
