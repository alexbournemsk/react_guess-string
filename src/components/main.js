import React from "react";
import LevelInfo from "./level-info";
import ScoreBlock from "./score-block";
import Progress from "./progress";
import PlayButton from "./play-button";
import { Link } from "react-router-dom";


function Main() {
  return (
    <div class='container'>
      <LevelInfo />
      <ScoreBlock />
      <Progress />
      <PlayButton />
      <Link to="/menu" title="/menu">
        Back to menu
      </Link>{" "}

      <div id='answer'></div>

    </div>)
}

export default Main;