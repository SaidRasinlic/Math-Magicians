import React from 'react';

export default function Calculator() {
  return (
    <div id="calculator">

      <input className="calc-display" type="text" defaultValue={0} />
      <button className="btn" type="button">AC</button>
      <button className="btn btn2" type="button">+/-</button>
      <button className="btn" type="button">%</button>
      <button className="btn orange" type="button">÷</button>

      <button className="btn" type="button">7</button>
      <button className="btn" type="button">8</button>
      <button className="btn" type="button">9</button>
      <button className="btn orange" type="button">x</button>

      <button className="btn" type="button">4</button>
      <button className="btn" type="button">5</button>
      <button className="btn" type="button">6</button>
      <button className="btn orange" type="button">-</button>

      <button className="btn" type="button">1</button>
      <button className="btn" type="button">2</button>
      <button className="btn" type="button">3</button>
      <button className="btn orange" type="button">+</button>

      <button className="btn span-2" type="button">0</button>
      <button className="btn" type="button">.</button>
      <button className="btn orange" type="button">=</button>

    </div>
  );
}
