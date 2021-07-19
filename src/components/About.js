import React from "react";
import { image } from "../data/data";

// a <div> element with an id of "about"
// inside the div element, there should be three child elements:
// a <h2> element with the content of "About Me"
// a <p> element with any content of your choosing
// a <img> element with the src attribute set to the image variable, and the alt attribute set to "I made this"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hi, I'm Tara.</p>
      <img src={ image } alt="I made this" />
    </div>
  )
}

export default About;
