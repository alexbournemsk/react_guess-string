import React from "react";

function playAudio() {
  console.log('play')
  const myAudio = document.querySelector('#my-audio');
  myAudio.play();
}

function StartButton() {
  
  return (
    <div class='start-button'>

      <button id='start-button' onClick={playAudio}>Начать игру</button>
      <audio id='my-audio' src='1str.mp3'></audio>
    </div>

  )
}

export default StartButton;