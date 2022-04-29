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

    this.performCalculation = this.performCalculation.bind(this);
  }

  performCalculation(buttonName) {
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

    return (
      <div id="calculator">
        <div className="calc-display">
          {displayOutput}
        </div>
        <CalculatorButton value="AC" performCalculation={this.performCalculation} />
        <CalculatorButton value="+/-" performCalculation={this.performCalculation} />
        <CalculatorButton value="%" performCalculation={this.performCalculation} />
        <CalculatorButton value="÷" orangeCell performCalculation={this.performCalculation} />
        <CalculatorButton value="7" performCalculation={this.performCalculation} />
        <CalculatorButton value="8" performCalculation={this.performCalculation} />
        <CalculatorButton value="9" performCalculation={this.performCalculation} />
        <CalculatorButton value="x" orangeCell performCalculation={this.performCalculation} />
        <CalculatorButton value="4" performCalculation={this.performCalculation} />
        <CalculatorButton value="5" performCalculation={this.performCalculation} />
        <CalculatorButton value="6" performCalculation={this.performCalculation} />
        <CalculatorButton value="-" orangeCell performCalculation={this.performCalculation} />
        <CalculatorButton value="1" performCalculation={this.performCalculation} />
        <CalculatorButton value="2" performCalculation={this.performCalculation} />
        <CalculatorButton value="3" performCalculation={this.performCalculation} />
        <CalculatorButton value="+" orangeCell performCalculation={this.performCalculation} />
        <CalculatorButton value="0" spanCell performCalculation={this.performCalculation} />
        <CalculatorButton value="." performCalculation={this.performCalculation} />
        <CalculatorButton value="=" orangeCell performCalculation={this.performCalculation} />
      </div>
    );
  }
}
