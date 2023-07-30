import { useState, useEffect, useRef } from 'react';
import '../styles/Game.scss';

const GAME_HEIGHT = 800; // Height of the game container
const DUCK_SIZE = 60; // Width and height of the duck

function Duck({ index, onShoot, onNoShoot }) {
  const duckRef = useRef(null);
  const [top, setTop] = useState(Math.floor(Math.random() * (GAME_HEIGHT - DUCK_SIZE)));
  const [duckYDir, setDuckYDir] = useState(true);
  const [duckYPx, setDuckYPx] = useState(0);

  useEffect(() => {
    const moveDuck = setInterval(() => {
      if (duckRef.current) {
        duckRef.current.style.transform = `translateX(100vw)`;
      }
    }, 10);

    const controlDuckYMovement = setInterval(() => {
      if (top + duckYPx < 0) { // If the duck would move off the top of the screen
        setDuckYDir(false); // Force the duck to move down
        setDuckYPx((prev) => prev + 1.7);
      } else if (top + duckYPx > GAME_HEIGHT - DUCK_SIZE) { // If the duck would move off the bottom of the screen
        setDuckYDir(true); // Force the duck to move up
        setDuckYPx((prev) => prev - 1);
      } else if (duckYDir) {
        setDuckYDir(!duckYDir);
        setDuckYPx((prev) => prev - 1);
      } else {
        setDuckYDir(!duckYDir);
        setDuckYPx((prev) => prev + 1.7);
      }
    }, 1000);

    return () => {
      clearInterval(moveDuck);
      clearInterval(controlDuckYMovement);
    };
  }, [duckYDir, duckYPx, top]);

  // Function to handle duck shot
  const handleDuckShot = () => {
    if (duckRef.current) {
      // Remove the duck from the screen by hiding it
      duckRef.current.style.display = 'none';
      // Call the onShoot function to notify the Game component that the duck was shot
      onShoot();
    }
  };

  return (
    <div
      ref={duckRef}
      className="duck"
      style={{ top: `${top + duckYPx}px`, animationDelay: `${index * 0.5}s` }}
      onMouseDown={handleDuckShot} // Call the handleDuckShot function when the duck is clicked
      onMouseUp={onNoShoot}
    ></div>
  );
}

export default Duck;
