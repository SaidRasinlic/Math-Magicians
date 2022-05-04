import React from 'react';
import '../css/footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab);

export default function Footer() {
  return (
    <footer id="main-footer" className="border-top-color2">
      <div className="container">
        <p>SOCIAL MEDIA</p>
        <br />
        <ul className="social-links text-center">
          <li>
            <a href="https://twitter.com/SaidRasinlic" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/SaidRasinlic" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/saidrasinlic/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
        <p className="text-center">&copy; 2022 - Said Rašinlić</p>
      </div>
    </footer>
  // <footer>
  //   <a href="https://github.com/SaidRasinlic/Math-Magicians.git" rel="noopener noreferrer" target="_blank">
  //     Copyright 2022, All Rights Reserved
  //   </a>

  // </footer>
  );
}
