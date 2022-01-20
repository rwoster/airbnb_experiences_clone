import React from "react";

// image
// import Logo from "../Images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img
        src={
          process.env.PUBLIC_URL +
          `./Images/airbnb-logo.png`
        }
        alt="airbnb logo"
        className="nav--logo"
      />
    </nav>
  );
}
