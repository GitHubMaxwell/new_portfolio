import React, { Component } from 'react';
import Portrait from '../assets/max_portrait.jpg';
export default class About extends Component {
  render() {
    return (
      <section className="container about">
        <ul className="container about-threeup-list">
          <li className="container about-threeup-item">
            <i className="fas fa-code" />
            <h3>Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="container about-threeup-item">
            <i className="fas fa-palette" />
            <h3>Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="container about-threeup-item">
            <i className="fas fa-mobile-alt" />
            <h3>Responsive</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
        <article className="container about-feature">
          <img src={Portrait} alt="portrait image" />
          <div className="container text-container">
            <h3>Who am I?</h3>
            <p>
              Hey! I'm Max and I am a Full-Stack Developer. MERN stack is my bread and butter but
              like most developers, I'm always learning new technologies and trying new things. I
              enjoy spending my free time going to meetups, hackathons, and collaborating with
              others to build interesting and challenging projects. Lets connect!
            </p>
            <ul className="container">
              <li>React.js</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
            </ul>
          </div>
        </article>
      </section>
    );
  }
}
