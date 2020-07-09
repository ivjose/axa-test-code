import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

const Input = ({ type, name, label, placeholder, onChange, ...props }) => {
  return (
    <div className="field-wrap">
      {label && (
        <label className="field-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        {...props}
        className="field-input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,

  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  onChange: () => {},
};

export default Input;
