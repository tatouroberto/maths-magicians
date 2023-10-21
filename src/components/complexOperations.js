import React from 'react';
import PropTypes from 'prop-types';

const ComplexOperations = ({ oper }) => (
  <div className="complex_operations">
    <p>{oper}</p>
  </div>
);

ComplexOperations.propTypes = {
  oper: PropTypes.string.isRequired,
};

const ComplexedOperations = () => (
  <div className="complexed_opearations">
    <ComplexOperations oper="AC" />
    <ComplexOperations oper="+/-" />
    <ComplexOperations oper="%" />
  </div>
);

export default ComplexedOperations;
