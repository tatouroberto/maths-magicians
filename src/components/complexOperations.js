import React from 'react';
import PropTypes from 'prop-types';

const ComplexOperations = ({ buttonName, handleClick }) => (
  <div className="complex_operations">
    <button type="button" onClick={() => { handleClick(buttonName); }}>{buttonName}</button>
  </div>

);

ComplexOperations.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const ComplexedOperations = ({ handleClick }) => (
  <div className="complexed_opearations">
    <ComplexOperations handleClick={handleClick} buttonName="AC" />
    <ComplexOperations handleClick={handleClick} buttonName="+/-" />
    <ComplexOperations handleClick={handleClick} buttonName="%" />
  </div>
);

ComplexedOperations.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ComplexedOperations;
