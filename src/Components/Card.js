import React from "react";

import Star from "../Images/star.png";
import Katie from "../Images/katie-zaferes.png";

export default function Card() {
  // - Make sure to include:
  //   - image
  //   - star icon (star.png), rating, and review count
  //   - title
  //   - cost/person
  return (
    <div className="card">
      <img
        src={Katie}
        alt="Katie Zaferes"
        className="card--image"
      />
      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
