import React from "react";

export default function Card(props) {
  // - Make sure to include:
  //   - image
  //   - star icon (star.png), rating, and review count
  //   - title
  //   - cost/person
  return (
    <div className="card">
      <img
        src={
          process.env.PUBLIC_URL + `./Images/${props.img}`
        }
        alt="host headshot"
        className="card--image"
      />
      <div className="card--stats">
        <img
          src={process.env.PUBLIC_URL + `./Images/star.png`}
          alt="star"
          className="card--star"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span>•</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> /
        person
      </p>
    </div>
  );
}
