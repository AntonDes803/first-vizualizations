'use client';

import { useEffect, useState } from 'react';

export const AnimatedNumber = ({ targetNumber, start }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const duration = 700;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = (timestamp - startTimestamp) / duration;

      if (progress < 1) {
        const randomNumber = Math.floor(Math.random() * targetNumber * 1.5);
        setNumber(randomNumber);
        window.requestAnimationFrame(step);
      } else {
        setNumber(targetNumber); // В кінці виставляємо правильне число
      }
    };

    window.requestAnimationFrame(step);
  }, [start, targetNumber]);

  return <span>{number}</span>;
};
