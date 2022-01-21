import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  let badge;
  if (badgeText === "SOLD OUT") {
    badge = (
      <div className="card--soldout">{badgeText}</div>
    );
  } else if (badgeText === "ONLINE") {
    badge = (
      <div className="card--online-event">{badgeText}</div>
    );
  }

  return (
    <div className="card">
      {badge}
      <img
        src={
          process.env.PUBLIC_URL +
          `./Images/${props.coverImg}`
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
        <span>{props.stats.rating}</span>
        <span className="gray">
          ({props.stats.reviewCount})
        </span>
        <span className="gray">•</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> /
        person
      </p>
    </div>
  );
}
