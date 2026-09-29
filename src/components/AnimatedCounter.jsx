import React, { useEffect, useState } from 'react';

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1000, decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const target = parseFloat(value);
    if (isNaN(target)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * target);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
