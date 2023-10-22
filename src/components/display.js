import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ operationResult }) => {
  const { next, total, operation } = operationResult;
  return (
    <div className="display_results">
      {total || ''}
      {' '}
      {operation || ''}
      {' '}
      {next || ''}
    </div>
  );
};

Display.propTypes = {
  operationResult: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Display;
