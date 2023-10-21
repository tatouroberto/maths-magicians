import React from 'react';
import PropTypes from 'prop-types';

function Numbered({ number, handleClickNumber }) {
  return (
    <span>
      <button type="button" id={number} onClick={() => { handleClickNumber(number); }}>
        {number}
      </button>
    </span>
  );
}

Numbered.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClickNumber: PropTypes.func.isRequired,
};

const Numbers = ({ handleClickNumber }) => (
  <div className="num_pad">
    <Numbered handleClickNumber={handleClickNumber} number="7" />
    <Numbered handleClickNumber={handleClickNumber} number="8" />
    <Numbered handleClickNumber={handleClickNumber} number="9" />
    <Numbered handleClickNumber={handleClickNumber} number="4" />
    <Numbered handleClickNumber={handleClickNumber} number="5" />
    <Numbered handleClickNumber={handleClickNumber} number="6" />
    <Numbered handleClickNumber={handleClickNumber} number="1" />
    <Numbered handleClickNumber={handleClickNumber} number="2" />
    <Numbered handleClickNumber={handleClickNumber} number="3" />
    <div className="num_pad_zero">
      <Numbered handleClickNumber={handleClickNumber} number="0" />
    </div>
    <div className="num_pad_dot">
      <Numbered handleClickNumber={handleClickNumber} number="." />
    </div>

  </div>
);

Numbers.propTypes = {
  handleClickNumber: PropTypes.func.isRequired,
};

export default Numbers;
