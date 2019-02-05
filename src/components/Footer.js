import React, { Fragment } from 'react';
export default function Footer() {
  return (
    <Fragment>
      <footer className="container footer-container">
        <p>&copy; 2019 Maxwell Rediker</p>
        <ul className="container">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="container">
          <li>
            <a href="">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <i className="fas fa-envelope" />
            </a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
}
