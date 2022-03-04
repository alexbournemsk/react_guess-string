import React from "react";
import LevelInfo from "./level-info";
import ScoreBlock from "./score-block";
import Progress from "./progress";
import PlayButton from "./play-button";
import { Link } from "react-router-dom";


function Main(props) {
  return (
    <div class='container'>
      {/* {props.match.params.year} */}

      <Link to="/" title="/">
        ←
      </Link>
      <LevelInfo />
      <ScoreBlock />
      <Progress />
      <PlayButton />


      <div id='answer'></div>

    </div>)
}

export default Main;