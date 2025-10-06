import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import catAnimation from './cat.json';

// Define the boundaries
const BOUNDARIES = {
  width: window.innerWidth,
  height: 5000,
  padding: 100
};

const FlyingCat = ({ id }) => {
  const catRef = useRef(null);
  const [position, setPosition] = useState({
    x: Math.random() * (BOUNDARIES.width - 200) + 100,
    y: Math.random() * (BOUNDARIES.height - 200) + 100,
    rotation: 0,
    speedX: (Math.random() - 0.5) * 4,
    speedY: (Math.random() - 0.5) * 4
  });

  useEffect(() => {
    const moveCat = () => {
      setPosition(prev => {
        let newX = prev.x + prev.speedX;
        let newY = prev.y + prev.speedY;
        let newSpeedX = prev.speedX;
        let newSpeedY = prev.speedY;

        if (newX < BOUNDARIES.padding || newX > BOUNDARIES.width - BOUNDARIES.padding) {
          newSpeedX = -newSpeedX * 0.9; // Slight speed reduction on bounce
          newX = newX < BOUNDARIES.padding ? BOUNDARIES.padding : BOUNDARIES.width - BOUNDARIES.padding;
        }

        if (newY < BOUNDARIES.padding || newY > BOUNDARIES.height - BOUNDARIES.padding) {
          newSpeedY = -newSpeedY * 0.9; // Slight speed reduction on bounce
          newY = newY < BOUNDARIES.padding ? BOUNDARIES.padding : BOUNDARIES.height - BOUNDARIES.padding;
        }
        
        const rotation = Math.atan2(newSpeedY, newSpeedX) * (180 / Math.PI);

        if (Math.random() > 0.98) {
          newSpeedX += (Math.random() - 0.5) * 0.5;
          newSpeedY += (Math.random() - 0.5) * 0.5;
        }

        const speed = Math.sqrt(newSpeedX * newSpeedX + newSpeedY * newSpeedY);
        const maxSpeed = 4;
        if (speed > maxSpeed) {
          newSpeedX = (newSpeedX / speed) * maxSpeed;
          newSpeedY = (newSpeedY / speed) * maxSpeed;
        }

        return {
          x: newX,
          y: newY,
          rotation,
          speedX: newSpeedX,
          speedY: newSpeedY
        };
      });
    };

    let animationId = requestAnimationFrame(function animate() {
      moveCat();
      animationId = requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={catRef}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '200px',
        height: '200px',
        transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`,
        transformOrigin: 'center',
        zIndex: 9999,
        pointerEvents: 'none',
        willChange: 'transform'
      }}
    >
      <Lottie
        animationData={catAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

const Animation = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '5000px',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 9998
    }}>
      {[...Array(5)].map((_, index) => (
        <FlyingCat key={index} id={index} />
      ))}
    </div>
  );
};

export default Animation;