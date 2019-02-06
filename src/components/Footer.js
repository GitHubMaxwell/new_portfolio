import React, { Fragment } from 'react';
export default function Footer() {
  return (
    <Fragment>
      <footer className="container footer-container">
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
            <a href="https://github.com/GitHubMaxwell" target="_blank">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maxwellrediker/" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="mailto:maxwell.rediker@gmail.com">
              <i className="fas fa-envelope" />
            </a>
          </li>
        </ul>
        <p>&copy; 2019 Maxwell Rediker</p>
      </footer>
    </Fragment>
  );
}
