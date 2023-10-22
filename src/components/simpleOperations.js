import React from 'react';
import PropTypes from 'prop-types';

function SimpleOperations({ operation, handleClick }) {
  return (
    <div className="sim_operations">
      <button type="button" onClick={() => { handleClick(operation); }}>
        {operation}
      </button>
    </div>
  );
}
SimpleOperations.propTypes = {
  operation: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const Operation = ({ handleClick }) => (
  <div className="simplest_operation">
    <SimpleOperations handleClick={handleClick} operation="÷" />
    <SimpleOperations handleClick={handleClick} operation="x" />
    <SimpleOperations handleClick={handleClick} operation="-" />
    <SimpleOperations handleClick={handleClick} operation="+" />
    <SimpleOperations handleClick={handleClick} operation="=" />
  </div>
);

Operation.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Operation;
