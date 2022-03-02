import React from "react";


function Main() {
  return (
    <div class='container'>


      <div class='level-info'>
        <img src= "img/level-guitar.png" alt="" srcset="" />
          <p class='info'>Guitar — level 1</p>
      </div>

      <div class='score-block'>
        <p><span></span></p>
      </div>




      <div class='progress'>
        <progress id="progress_bar" max="10" value="1"></progress>
      </div>

      <div class='start-button'>
        <button id='start-button'>Начать игру</button>
        <audio id='my-audio' src=''></audio>
      </div>

      <div class='play-button'>
        <a href='#'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'>
            <polygon class='play-btn__svg' points='9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69' />
            <path class='play-btn__svg'
              d='M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z' />
          </svg> </a>
      </div>


      <div id='answer'></div>

    </div>)
}

export default Main;