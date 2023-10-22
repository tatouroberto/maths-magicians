import React, { useState } from 'react';
import ComplexedOperations from './complexOperations';
import Display from './display';
import Numbers from './numbers';
import Operation from './simpleOperations';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [operationResult, mathOperation] = useState({});
  const handleClick = (buttonName) => {
    const result = calculate(operationResult, buttonName);
    mathOperation(result);
  };

  return (
    <div className="calculator_container">
      <Display operationResult={operationResult} />
      <ComplexedOperations handleClick={handleClick} />
      <Numbers handleClickNumber={handleClick} />
      <Operation handleClick={handleClick} />
    </div>

  );
};

export default Calculator;
