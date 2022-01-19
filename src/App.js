import React from "react";

// stylesheet
import "./Styles/style.css";
// components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Card />
    </React.Fragment>
  );
}

export default App;
