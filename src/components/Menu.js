import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <header>
        <nav className="container">
          <h1>Max R</h1>
          <ul className="container right">
            <li className="container">
              <i className="far fa-smile" />
              <a href="#about">About</a>
            </li>
            <li className="container">
              <i className="far fa-folder-open" />
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="container">
              <i className="far fa-paper-plane" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
