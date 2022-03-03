import React from "react";
import LevelInfo from "../components/level-info";
import ScoreBlock from "../components/score-block";
import Progress from "../components/progress";
import PlayButton from "../components/play-button";
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