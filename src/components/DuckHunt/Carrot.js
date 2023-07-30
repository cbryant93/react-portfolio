import { useState, useEffect, useRef } from 'react';
import '../styles/Game.scss';

const GAME_HEIGHT = 800; // Height of the game container
const CARROT_SIZE = 70; // Height of the carrot

function Carrot({ index, onShoot, onNoShoot }) {
  const carrotRef = useRef(null);
  const [top, setTop] = useState(Math.floor(Math.random() * (GAME_HEIGHT - CARROT_SIZE)));
  const [carrotYDir, setCarrotYDir] = useState(true);
  const [carrotYPx, setCarrotYPx] = useState(0);

  useEffect(() => {
    const moveCarrot = setInterval(() => {
      if (carrotRef.current) {
        carrotRef.current.style.transform = `translateX(100vw)`;
      }
    }, 7);

    const controlCarrotYMovement = setInterval(() => {
      if (top + carrotYPx < 0) { // If the carrot would move off the top of the screen
        setCarrotYDir(false); // Force the carrot to move down
        setCarrotYPx((prev) => prev + 1.7);
      } else if (top + carrotYPx > GAME_HEIGHT - CARROT_SIZE) { // If the carrot would move off the bottom of the screen
        setCarrotYDir(true); // Force the carrot to move up
        setCarrotYPx((prev) => prev - 1);
      } else if (carrotYDir) {
        setCarrotYDir(!carrotYDir);
        setCarrotYPx((prev) => prev - 1);
      } else {
        setCarrotYDir(!carrotYDir);
        setCarrotYPx((prev) => prev + 1.7);
      }
    }, 1000);

    return () => {
      clearInterval(moveCarrot);
      clearInterval(controlCarrotYMovement);
    };
  }, [carrotYDir, carrotYPx, top]);

  // Function to handle carrot shot
  const handleCarrotShot = () => {
    if (carrotRef.current) {
      // Remove the carrot from the screen by hiding it
      carrotRef.current.style.display = 'none';
      // Call the onShoot function to notify the Game component that the carrot was shot
      onShoot();
    }
  };

  return (
    <div
      ref={carrotRef}
      className="carrot"
      style={{ top: `${top + carrotYPx}px`, animationDelay: `${index * 0.5}s` }}
      onMouseDown={handleCarrotShot} // Call the handleCarrotShot function when the carrot is clicked
      onMouseUp={onNoShoot}
    ></div>
  );
}

export default Carrot;
