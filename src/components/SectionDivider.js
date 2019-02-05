import React, { Component } from 'react';

export default class SectionDivider extends Component {
  constructor(props) {
    super(props);
    // make little backend to hold data and pull in with reducer
    this.state = {
      title: 'Portfolio',
      about: 'My development projects'
    };
  }
  render() {
    return (
      <section className="container divider">
        <h2>{this.state.title}</h2>
        <p>{this.state.about}</p>
      </section>
    );
  }
}
