"use client"

import React, { useEffect, useRef, useState } from 'react';

const MIN_SPEED = 1.5;
const MAX_SPEED = 2.5;

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Blob = () => {
  const blobRef = useRef(null); // To reference the blob element
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [velocity, setVelocity] = useState({
    vx: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
    vy: randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1),
  });

  const size = useRef(0); // Store the size of the blob
  const initialX = useRef(0); // Store the initial X position
  const initialY = useRef(0); // Store the initial Y position

  useEffect(() => {
    // Set initial position when the component is mounted
    if (blobRef.current) {
      // @ts-ignore
      const boundingRect = blobRef.current.getBoundingClientRect();
      size.current = boundingRect.width;
      initialX.current = randomNumber(0, window.innerWidth - size.current);
      initialY.current = randomNumber(0, window.innerHeight - size.current);
      setPosition({
        x: initialX.current,
        y: initialY.current,
      });
    }
  }, []);

  useEffect(() => {
    // Animation loop using requestAnimationFrame
    const update = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.vx;
        let newY = prev.y + velocity.vy;

        // Handle collisions with window borders
        if (newX >= window.innerWidth - size.current) {
          newX = window.innerWidth - size.current;
          setVelocity((prevVelocity) => ({ ...prevVelocity, vx: prevVelocity.vx * -1 }));
        }
        if (newY >= window.innerHeight - size.current) {
          newY = window.innerHeight - size.current;
          setVelocity((prevVelocity) => ({ ...prevVelocity, vy: prevVelocity.vy * -1 }));
        }
        if (newX <= 0) {
          newX = 0;
          setVelocity((prevVelocity) => ({ ...prevVelocity, vx: prevVelocity.vx * -1 }));
        }
        if (newY <= 0) {
          newY = 0;
          setVelocity((prevVelocity) => ({ ...prevVelocity, vy: prevVelocity.vy * -1 }));
        }

        return { x: newX, y: newY };
      });

      requestAnimationFrame(update);
    };

    // Start the animation loop
    requestAnimationFrame(update);
  }, [velocity]);

  return (
    <div
      ref={blobRef}
      className="bouncing-blob"
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: `translate(${position.x - initialX.current}px, ${position.y - initialY.current}px)`,
      }}
    >
      {/* Blob content goes here */}
    </div>
  );
};

const BlobContainer = () => {
  return (
    <div>
      <Blob />
      <Blob />
      <Blob />
      {/* Add as many Blob components as needed */}
    </div>
  );
};

export default BlobContainer;
