import React from "react";

// image
import PhotoGrid from "../Images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img
        src={PhotoGrid}
        alt="grid"
        className="hero--photo"
      />

      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}
