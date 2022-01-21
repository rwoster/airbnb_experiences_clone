import React from "react";

// stylesheet
import "./Styles/style.css";
// components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

// data
import Data from "./data";

function App() {
  // map over experiences, storing in experienceCards
  const cards = Data.map((item) => (
    // <Card key={item.id} item={item} />
    <Card key={item.id} {...item} />
  ));

  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      {/* render experienceCards in a container */}
      <div className="experiences">{cards}</div>
    </React.Fragment>
  );
}

export default App;
