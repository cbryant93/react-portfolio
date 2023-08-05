import React, { useState, useEffect, useRef } from 'react';
import '../styles/Game.scss';

const GAME_HEIGHT = 800; // Height of the game container
const DUCK_SIZE = 60; // Width and height of the duck
const SPAWN_HEIGHT_PERCENTAGE = 25;

function Duck({ index, onShoot, onNoShoot }) {
  const duckRef = useRef(null);
  const maxTop = GAME_HEIGHT - (GAME_HEIGHT * SPAWN_HEIGHT_PERCENTAGE) / 100 - DUCK_SIZE;
  const [top, setTop] = useState(Math.floor(Math.random() * maxTop));
  const [duckYDir, setDuckYDir] = useState(true);
  const [duckYPx, setDuckYPx] = useState(0);

  useEffect(() => {
    const moveDuck = setInterval(() => {
      if (duckRef.current) {
        duckRef.current.style.transform = `translateX(100vw)`;
      }
    }, 10);

    const controlDuckYMovement = setInterval(() => {
      if (top + duckYPx < 0) {
        setDuckYDir(false);
        setDuckYPx((prev) => prev + 2.7);
      } else if (top + duckYPx > GAME_HEIGHT - DUCK_SIZE) {
        setDuckYDir(true);
        setDuckYPx((prev) => prev - 1);
      } else if (duckYDir) {
        setDuckYDir(!duckYDir);
        setDuckYPx((prev) => prev - 1);
      } else {
        setDuckYDir(!duckYDir);
        setDuckYPx((prev) => prev + 2.7);
      }
    }, 2000);

    return () => {
      clearInterval(moveDuck);
      clearInterval(controlDuckYMovement);
    };
  }, [duckYDir, duckYPx, top]);

  const handleDuckShot = () => {
    if (duckRef.current) {
      duckRef.current.style.display = 'none';
      onShoot();
    }
  };

  return (
    <div
      ref={duckRef}
      className="duck"
      style={{ top: `${top + duckYPx}px`, animationDelay: `${index * 0.5}s` }}
      onMouseDown={handleDuckShot}
      onMouseUp={onNoShoot}
    ></div>
  );
}

export default Duck;
