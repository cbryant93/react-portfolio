import React, { useEffect, useRef, useState } from 'react';
import '../styles/Game.scss';

const GAME_HEIGHT = 800; // Height of the game container
const MEAT_SIZE = 70; // Height of the meat

const Meat = ({ index, onShoot, onNoShoot }) => {
  const meatRef = useRef(null);
  const [top, setTop] = useState(Math.floor(Math.random() * (GAME_HEIGHT - MEAT_SIZE)));
  const [meatYDir, setMeatYDir] = useState(true);
  const [meatYPx, setMeatYPx] = useState(0);

  useEffect(() => {
    const moveMeat = setInterval(() => {
      if (meatRef.current) {
        meatRef.current.style.transform = `translateX(100vw)`;
      }
    }, 7);

    const controlMeatYMovement = setInterval(() => {
      if (top + meatYPx < 0) { // If the meat would move off the top of the screen
        setMeatYDir(false); // Force the meat to move down
        setMeatYPx((prev) => prev + 1.7);
      } else if (top + meatYPx > GAME_HEIGHT - MEAT_SIZE) { // If the meat would move off the bottom of the screen
        setMeatYDir(true); // Force the meat to move up
        setMeatYPx((prev) => prev - 1);
      } else if (meatYDir) {
        setMeatYDir(!meatYDir);
        setMeatYPx((prev) => prev - 1);
      } else {
        setMeatYDir(!meatYDir);
        setMeatYPx((prev) => prev + 1.7);
      }
    }, 100);

    return () => {
      clearInterval(moveMeat);
      clearInterval(controlMeatYMovement);
    };
  }, [meatYDir, meatYPx, top]);

  const handleMeatShot = () => {
    if (meatRef.current) {
      meatRef.current.style.display = 'none';
      onShoot();
    }
  };

  return (
    <div
      ref={meatRef}
      className="meat"
      style={{ top: `${top + meatYPx}px`, animationDelay: `${index * 0.5}s` }}
      onMouseDown={handleMeatShot}
      onMouseUp={onNoShoot}
    ></div>
  );
};

export default Meat;
