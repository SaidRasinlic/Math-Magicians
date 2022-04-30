import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate() {
    const { value, calculatorExecutor } = this.props;
    calculatorExecutor(value);
  }

  render() {
    const { value } = this.props;
    let className = '';
    if (value.match(/[1-9.AC/%/]/)) {
      className = 'btn';
    } else if (value.match(/[0]/)) {
      className = 'btn span-2';
    } else if (value.match(/[+-=x÷]/)) {
      className = 'btn orange';
    }

    return (
      <button type="button" className={className} onClick={this.handleCalculate}>{value}</button>
    );
  }
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  calculatorExecutor: PropTypes.func.isRequired,
};
