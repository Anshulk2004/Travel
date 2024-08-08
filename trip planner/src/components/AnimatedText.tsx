"use client"

import React, { useState, useEffect } from 'react';
import '@/styles/AnimatedText.css';

const AnimatedText = ({ text }: { text: string }) => {
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const words = text.split(' ');
    let count = 0;
    const interval = setInterval(() => {
      if (count < words.length) {
        setVisibleWords(prev => prev + 1);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 500); 

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-4xl font-bold text-white drop-shadow-lg animated-text">
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={index < visibleWords ? 'visible' : ''}
          style={{ transitionDelay: `${index * 0.05}s` }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;