import React from "react";

function NavBar() {
  //inside the nav element, there should be two child elements:
  //an <a> element, with the href attribute set to #home, and the content of "Home"
  //an <a> element, with the href attribute set to #about, and the content of "About"
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  )
}

export default NavBar;
