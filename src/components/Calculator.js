import React from 'react';
import '../css/calculator.css';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOutput: '0',
      total: null,
      next: null,
      operation: null,
    };

    this.calculatorExecutor = this.calculatorExecutor.bind(this);
  }

  calculatorExecutor(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    let { displayOutput } = this.state;

    if (total || next || operation) {
      displayOutput = (total ?? '') + (operation == null ? '' : ` ${operation} `) + (next ?? '');
    } else {
      displayOutput = '0';
    }

    this.setState({
      displayOutput,
      total,
      next,
      operation,
    });
  }

  render() {
    const { displayOutput } = this.state;
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
              calculatorExecutor={this.calculatorExecutor}
              key={button}
            />
          ))
        }
      </div>
    );
  }
}
