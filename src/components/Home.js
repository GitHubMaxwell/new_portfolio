import React from 'react';
import HeroImg from '../assets/backgrounds/background.jpg';
export default function Home() {
  return (
    <section className="hero">
      <img src={HeroImg} alt="hero image" />
      <div className="container text-container">
        <h1>
          Hello! My name is <span>Max Rediker.</span>
          <br /> I am a Software Developer.
        </h1>
        <button>My Work</button>
      </div>
    </section>
  );
}
