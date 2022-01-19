import React from "react";

// image
import Logo from "../Images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img
        src={Logo}
        alt="airbnb logo"
        className="nav--logo"
      />
    </nav>
  );
}
