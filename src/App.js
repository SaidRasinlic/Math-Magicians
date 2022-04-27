import React from 'react';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            React Calculator Project
          </h1>
          <Calculator />
        </header>
      </div>
    );
  }
}
