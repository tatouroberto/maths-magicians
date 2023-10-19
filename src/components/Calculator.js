import React from 'react';
import ComplexedOperations from './complexOperations';
import Display from './display';
import Numbers from './numbers';
import Operation from './simpleOperations';

const Calculator = () => (
  <div className="calculator_container">
    <Display />
    <ComplexedOperations />
    <Numbers />
    <Operation />
  </div>
);

export default Calculator;
