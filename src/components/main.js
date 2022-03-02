import React from "react";
import LevelInfo from "./level-info";
import ScoreBlock from "./score-block";
import Progress from "./progress";
import PlayButton from "./play-button";


function Main() {
  return (
    <div class='container'>
      <LevelInfo />
      <ScoreBlock />
      <Progress />
      <PlayButton />


      <div id='answer'></div>

    </div>)
}

export default Main;