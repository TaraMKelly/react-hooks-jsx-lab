import React from "react";
import { name, city } from "../data/data.js";

// Inside the <Home> component, there are a couple of variables defined that will allow you to insert your name and city into the portfolio page.

// The <Home> component should return the following JSX elements:

// a <div> element with an id of "home"
// inside the div element, there should be one child element:
// a <h1> element, with the style attribute set to a color of "firebrick", and the content of "Your Name is a Web Developer from Your City"
// use the imported name and city variables within the component, and the JSX expression syntax to use the variables inside your JSX elements

const h1Style = {
  color: "firebrick"
}

function Home() {

  return (
    <div id="home">
      <h1 style={h1Style}>{name} is a Web Developer from {city}</h1>
    </div>
  )
}

export default Home;
