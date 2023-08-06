import React, { useState, useEffect } from 'react';
import "./styles/Game.scss";
import Duck from './DuckHunt/Duck.js';
import Carrot from './DuckHunt/Carrot.js';
import Meat from './DuckHunt/Meat.js';
import musicSound from './assets/sounds/Mask_Off_8_Bit.mp3';
import quakSound from './assets/sounds/quak.wav';
import bangSound from './assets/sounds/gun-shot.wav';


function Game() {

  const [showInstructions, setShowInstructions] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [carnivoreScore, setCarnivoreScore] = useState(0);
  const [veganScore, setVeganScore] = useState(0);
  const [ducks, setDucks] = useState([]);
  const [carrots, setCarrots] = useState([]);
  const [meats, setMeats] = useState([]);
  const [duckClicked, setDuckClicked] = useState(false);
  const [carrotClicked, setCarrotClicked] = useState(false);
  const [meatClicked, setMeatClicked] = useState(false);
  const [backgroundClicked, setMissClick] = useState(false);

  // Allows instructions to be shown if set to true
  const handleInstructionsClick = () => {
    setShowInstructions(true);
  }
  // Allows instructions to be hidden if set to false
  const handleBackClick = () => {
    setShowInstructions(false);
  }

  // Allows game to start once start button is clicked
  const handleStartButtonClick = () => {
    setSeconds(60);
    setGameStarted(true);
  }

  // Resets variables when restart button is clicked
  const handleRestartClick = () => {
    setShowGameOver(false);
    setCarnivoreScore(0);
    setVeganScore(0);
    setSeconds(60);
    setGameStarted(true);
    setDucks([]);
    setCarrots([]);
    setMeats([]);
    setDuckClicked(false);
    setCarrotClicked(false);
    setMeatClicked(false);
    setMissClick(false);
  };

  const createDuck = () => {
    const newDuckId = Math.random();
    setDucks((prevDucks) => [
      ...prevDucks,
      <Duck key={newDuckId} id={newDuckId} onShoot={() => shootDuck(newDuckId)} onNoShoot={() => noShootDuck()} />,
    ]);
  };

  const createCarrot = () => {
    const newCarrotId = Math.random();
    setCarrots((prevCarrots) => [
      ...prevCarrots,
      <Carrot key={newCarrotId} id={newCarrotId} onShoot={() => shootCarrot(newCarrotId)} onNoShoot={() => noShootCarrot()} />,
    ]);
  };

  const createMeat = () => {
    const newMeatId = Math.random();
    setMeats((prevMeats) => [
      ...prevMeats,
      <Meat key={newMeatId} id={newMeatId} onShoot={() => shootMeat(newMeatId)} onNoShoot={() => noShootMeat()} />,
    ]);
  };

  useEffect(() => {
    const music = new Audio(musicSound);
    let interval = null;

    if (gameStarted) {
      music.play();
      music.volume = 0.4;
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 0) {
            clearInterval(interval);
            setShowGameOver(true);
            music.pause();
            return prevSeconds;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      music.pause();
    };
  }, [gameStarted]);

  useEffect(() => {
    if (showGameOver) {
      setGameStarted(false);
    }
  }, [showGameOver]);


  useEffect(() => {
    let createDuckInterval = null;
    if (gameStarted && !showGameOver) {
      createDuckInterval = setInterval(() => {
        createDuck();
      }, 1000); // Adjust the interval as needed
    }
    return () => {
      clearInterval(createDuckInterval);
    };
  }, [gameStarted, showGameOver]);

  useEffect(() => {
    let createCarrotInterval = null;
    if (gameStarted && !showGameOver) {
      createCarrotInterval = setInterval(() => {
        createCarrot();
      }, 800); // Adjust the interval as needed
    }
    return () => {
      clearInterval(createCarrotInterval);
    };
  }, [gameStarted, showGameOver]);

  useEffect(() => {
    let createMeatInterval = null;
    if (gameStarted && !showGameOver) {
      createMeatInterval = setInterval(() => {
        createMeat();
      }, 5000); // Adjust the interval as needed
    }
    return () => {
      clearInterval(createMeatInterval);
    };
  }, [gameStarted, showGameOver]);


  const handleMissClick = () => {
    setMissClick(true);
    Miss();
  }

  function Miss() {
    if (gameStarted && backgroundClicked) {
      setVeganScore((prevScore) => prevScore + 1);
      setCarnivoreScore((prevScore) => prevScore - 1); //Decrements main score when duck missed  
    }
  }

  const shootDuck = (duckId) => {
    if (!duckClicked) {
      setCarnivoreScore((prevScore) => prevScore + 1); // Increment score by one when duck is shot
      setDuckClicked(true);
      const quak = new Audio(quakSound);
      quak.play();
      const bang = new Audio(bangSound);
      bang.play();

      // Remove the clicked duck from the list
      setDucks((prevDucks) => prevDucks.filter((duck) => duck.key !== duckId.toString()));
    }
  }

  function noShootDuck(event) {
    setDuckClicked(false);
  }

  const shootMeat = (meatId) => {
    if (!meatClicked) {
      setCarnivoreScore((prevScore) => prevScore + 5); // Increment score by one when duck is shot
      setMeatClicked(true);
      const bang = new Audio(bangSound);
      bang.play();

      // Remove the clicked duck from the list
      setMeats((prevMeats) => prevMeats.filter((meat) => meat.key !== meatId.toString()));
    }
  }

  function noShootMeat(event) {
    setMeatClicked(false);
  }

  const shootCarrot = (carrotId) => {
    if (!carrotClicked) {
      setVeganScore((prevScore) => prevScore + 3); // Increment score by 3 when carrot is shot
      setCarrotClicked(true);
      const bang = new Audio(bangSound);
      bang.play();

      // Remove the clicked carrot from the list
      setCarrots((prevCarrots) => prevCarrots.filter((carrot) => carrot.key !== carrotId.toString()));
    }
  }

  function noShootCarrot(event) {
    setCarrotClicked(false);
  }


  return (
    <div className='gameSection'>
      <div className='background'>
        <div className="Title">
          <h1>Vegan Duck Hunt</h1>
        </div>

        <div className='gameStats'>
          <div className="cScore">
            <h3>Carnivore Score</h3>
            <p id="points">{carnivoreScore}</p>
          </div>

          <div className="timer">
            <h3>Timer: </h3>
            <p id="timer">{seconds}</p>
          </div>

          <div className="vScore">
            <h3>Vegan Score</h3>
            <p id="missed">{veganScore}</p>
          </div>
        </div>

        <div className="container" onClick={handleMissClick}>
          {gameStarted && !showGameOver ? (
            <div>
              {/* Game content goes here */}
              {ducks}
              {carrots}
              {meats}
            </div>
          ) : (
            <div className='gameButtons'>
              {showGameOver ? (
                <div className="gameover" id="restart">
                  <h2>GAME OVER!</h2>
                  <div className="scoreSection">
                    <div>
                      <h3>Carnivore Score</h3>
                      <p id="points">{carnivoreScore}</p>
                    </div>
                    <div>
                      <h3>Vegan Score</h3>
                      <p id="missed">{veganScore}</p>
                    </div>
                  </div>
                  <p id="endMessage">
                    {carnivoreScore > veganScore ? "You blood thirsty animal!" : veganScore > carnivoreScore ? "We get it, you're a Vegan!" : "Its a draw! You obviously have dreams of a peaceful world!"}
                  </p>
                  <button id="bRestart" className="btn" type="button" name="button" onClick={handleRestartClick}>Restart</button>
                </div>
              ) : (
                <div className='startButtons'>
                  <button className="btn gameButton" onClick={handleStartButtonClick}>Start</button>
                  <button className="btn gameButton" type="button" name="button" onClick={handleInstructionsClick}>
                    How to play?
                  </button>
                </div>
              )}
            </div>
          )}

          {showInstructions && (
            <div className="instructions" id="instruct">
              {/* Instruction content... */}
              <h2>How to play?</h2>
              <p>Do you believe meat is murder?</p>
              <p>Are you fed up of vegans pushing their agenda on you?</p>
              <p>Then this is the game for you!</p>
              <p>The goal is simple: shoot as many vegan protesters as possible.</p>
              <p>Use the arrow keys to move and the space bar to shoot.</p>
              <p>But be careful not to hit any innocent bystanders!</p>
              <button className="btn" id="back" type="button" name="button" onClick={handleBackClick}>Back</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}


export default Game;