import React from 'react';
import PropTypes from 'prop-types';

export default function CalculatorButton(props) {
  const { value, calculatorExecutor } = props;
  let className = '';
  if (value.match(/[1-9.AC/%/]/)) {
    className = 'btn';
  } else if (value.match(/[0]/)) {
    className = 'btn span-2';
  } else if (value.match(/[+-=x÷]/)) {
    className = 'btn orange';
  }

  const handleCalculate = () => {
    calculatorExecutor(value);
  };

  return (
    <button type="button" className={className} onClick={handleCalculate}>{value}</button>
  );
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  calculatorExecutor: PropTypes.func.isRequired,
};
