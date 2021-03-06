import React from "react";

// image
// import PhotoGrid from "../Images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero--container">
      <img
        src={
          process.env.PUBLIC_URL + `./Images/photo-grid.png`
        }
        alt="grid"
        className="hero--photo"
      />

      <div className="hero--text-container">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by
          one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  );
}
