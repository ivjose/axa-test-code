import React from 'react';
import PropTypes from 'prop-types';
import './AlertDisplay.styles.css';

const AlertDisplay = ({ message, status, ...props }) => {
  return (
    <div className={`alert-display ${status}`} {...props}>
      <h3>{status}</h3>
      <p>{message}</p>
    </div>
  );
};

AlertDisplay.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string,
};

AlertDisplay.defaultProps = {
  status: '',
};

export default AlertDisplay;
