import { useEffect, useState } from 'react';

export const easeOutQuad = t => t * (2 - t);
export const frameDuration = 1000 / 50;

export default function useAnimationFrames(percentage, duration) {
  const countTo = parseInt(percentage, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    setTimeout(function() {
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        setCount(Math.floor(countTo * progress));

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    }, 1000);
  }, [countTo, duration, setCount]);

  return count;
}
