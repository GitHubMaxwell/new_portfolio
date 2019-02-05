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
      <section className="container contact-container">
        <div className="contact-text">
          <h3>Let's Connect</h3>
          <p>
            <i className="fas fa-envelope" />
            maxwell@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt" />
            Seattle, Washington
          </p>
        </div>
        <form className="container">
          <div className="form-input-container">
            <input type="text" placeholder="Name" required="" />
            <i className="fas fa-user" />
          </div>
          <div className="form-input-container">
            <input type="text" placeholder="example@email.com" required="" />
            <i className="fas fa-envelope" />
          </div>
          <div className="form-input-container">
            <textarea placeholder="Message" name="" id="" cols="30" rows="10" required="" />
            <i className="fas fa-pen" />
          </div>
          <button onClick={this.onSubmit}>Message Me!</button>
        </form>
      </section>
    );
  }
}
