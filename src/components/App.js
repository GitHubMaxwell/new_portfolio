import React, { Component, Fragment } from 'react';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Home from './Home.js';
import SectionDivider from './SectionDivider';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Home />
        <SectionDivider id="about" />
        <About />
        <SectionDivider id="portfolio" />
        <Portfolio />
        <SectionDivider id="contact" />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}
