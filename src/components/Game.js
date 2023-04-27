import React, { useState } from 'react';
import "./styles/Game.scss";
function Game() {
  const [score, setScore] = useState(0);

  const handleButtonClick = () => {
    setScore(score + 1);
  };

  return (
<div className='background'>
   
    <div className="Title">
        <h1>Vegan Duck Hunt</h1>
    </div>

  <div className="container">

        <div className='gameStats'>
            
            <div className="cScore">
                <h3>Carnivore Score</h3>
                <p id="points">0</p>
                {/* Carnivore score is appended here */}
            </div>

            <div className="timer">
                <h3>Timer: </h3>
                <p id="timer"></p>
                {/* Timer appended here */}
            </div>

            <div className="vScore">
            <h3>Vegan Score</h3>
            <p id="points">0</p>
            {/* Vegan score appended here */}
            </div>
        </div>

        <div className='gameButtons'>
            <button className="btn" id="startButton">Start</button>
            {/* Start Button */}
            <button className="btn" id="how" type="button" name="button">How to play?</button>
            {/* How to play button */}
        </div>

            <div className="gameover" id="restart">
            <h2>GAME OVER!</h2>
            <p id="finalScore"></p>
            {/* Final score is appended here */}
            <p id="endMessage"></p>
            {/* Appropriate end message appended here */}
            <button id="bResart" className="btn" type="button" name="button">Restart</button>
            {/* Restart Button */}
            </div>

            <div className="instructions" id="instruct">
            {/* Instructions message */}
            <h2>How to play?</h2>
            <p>Do you believe meat is murder?</p>
            <p>Are you fed up of vegans pushing their agenda on you?</p>
            <p>Are you neither here nor there?</p>
            <p>Play the game how you like.</p>
            <p>Targets will fly across the screen, try your best to click and shoot whatever reflects your beliefs.</p>
            <button type="button" name="button" id="back">back</button>
            {/* Back button */}
            </div>
    </div>    
</div>
  );
}

export default Game;
