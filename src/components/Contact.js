import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <section className="container contact-container" id="contact">
        <div className="contact-text">
          <h3>Let's Connect</h3>
          <p>
            <i className="fas fa-envelope" />
            maxwell.rediker@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt" />
            Seattle, Washington
          </p>
        </div>
      </section>
    );
  }
}
