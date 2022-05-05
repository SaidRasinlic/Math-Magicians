import React, { useState } from 'react';
import '../css/calculator.css';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';
import image from '../assets/images/removed.png';

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
    <div className="calculator-page">
      <div className="calculator-content">
        <h1 className="calc-title" style={{ color: '#f5913e' }}>Let&apos;s do some Math!</h1>
        <img className="calculator-img" src={image} alt="banner" />
      </div>
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
    </div>
  );
}
