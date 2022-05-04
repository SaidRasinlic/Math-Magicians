import React from 'react';
import world from '../assets/images/godshand.gif';

export default function Quote() {
  return (
    <div className="quote-wrapper">
      <p className="quote">
        Mathematics is the language in which God has written the Universe. - Galileo Galilei
      </p>
      <img className="world" src={world} alt="this slowpoke moves" />
    </div>
  );
}
