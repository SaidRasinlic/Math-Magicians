import React, { useState } from 'react';
import '../css/calculator.css';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [calculator, setCalculatorState] = useState(
    {
      displayOutput: '0',
      total: null,
      next: null,
      operation: null,
    },
  );

  let { displayOutput } = calculator;

  const calculatorExecutor = (buttonName) => {
    const { total, next, operation } = calculate(calculator, buttonName);

    if (total || next || operation) {
      displayOutput = (total ?? '') + (operation == null ? '' : ` ${operation} `) + (next ?? '');
    } else {
      displayOutput = '0';
    }
    setCalculatorState({
      displayOutput,
      total: total ?? 0,
      next,
      operation,
    });
  };

  const calculatorButtons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div id="calculator">
      <div className="calc-display">
        {displayOutput}
      </div>
      {
          calculatorButtons.map((button) => (
            <CalculatorButton
              value={button}
              calculatorExecutor={calculatorExecutor}
              key={button}
            />
          ))
        }
    </div>
  );
}
