import React from 'react';
import PropTypes from 'prop-types';

const SimpleOperations = ({ oper }) => (
  <div className="sim_operations">
    <p>{oper}</p>
  </div>
);

SimpleOperations.propTypes = {
  oper: PropTypes.string.isRequired,
};

const Operation = () => (
  <div className="simplest_operation">
    <SimpleOperations oper="+" />
    <SimpleOperations oper="X" />
    <SimpleOperations oper="- " />
    <SimpleOperations oper="+" />
    <SimpleOperations oper="=" />
  </div>
);

export default Operation;
