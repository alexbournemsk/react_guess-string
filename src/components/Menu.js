import React from "react";
import { Link } from "react-router-dom";
import StartButton from "./start-button";


function Menu() {
  return (
    <div class='menu-container'>
      <Link to="/main" title="/main">
        <StartButton />
      </Link>
    </div>
  )
}

export default Menu;