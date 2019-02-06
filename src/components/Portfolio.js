import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <section className="container portfolio-container" id="portfolio">
        <ul className="container portfolio-list">
          <li className="portfolio-item shadow-light flex-item">
            <div className="portfolio-image">
              <img src="https://picsum.photos/200/150" alt="pic" />
            </div>
            <h3>Title 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore necessitatibus
              accusamus fugiat provident voluptas!
            </p>
            <a href="">
              Github
              <i className="fab fa-github" />
            </a>
          </li>
          <li className="portfolio-item shadow-light flex-item">
            <div className="portfolio-image">
              <img src="https://picsum.photos/200/150" alt="pic" />
            </div>
            <h3>Title 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore necessitatibus
              accusamus fugiat provident voluptas!
            </p>
            <a href="">
              Github
              <i className="fab fa-github" />
            </a>
          </li>
          <li className="portfolio-item shadow-light flex-item">
            <div className="portfolio-image">
              <img src="https://picsum.photos/200/150" alt="pic" />
            </div>
            <h3>Title 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde labore necessitatibus
              accusamus fugiat provident voluptas!
            </p>
            <a href="">
              Github
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
