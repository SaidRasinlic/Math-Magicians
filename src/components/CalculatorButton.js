import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate() {
    const { value, performCalculation } = this.props;
    performCalculation(value);
  }

  render() {
    const { value, spanCell, orangeCell } = this.props;
    let className = '';
    if (spanCell) {
      className = 'btn span-2';
    } else if (orangeCell) {
      className = 'btn orange';
    } else {
      className = 'btn';
    }

    return (
      <button type="button" className={className} onClick={this.handleCalculate}>{value}</button>
    );
  }
}

CalculatorButton.propTypes = {
  value: PropTypes.string.isRequired,
  orangeCell: PropTypes.bool,
  spanCell: PropTypes.bool,
  performCalculation: PropTypes.func.isRequired,
};

CalculatorButton.defaultProps = {
  spanCell: false,
  orangeCell: false,
};
