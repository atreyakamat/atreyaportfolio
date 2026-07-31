import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 40,
  className = '',
}) => {
  const reducedMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(text);
      return;
    }

    let i = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, reducedMotion]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{displayedText}</span>
      {!reducedMotion && (
        <span className="ml-1 inline-block h-3.5 w-[2px] animate-pulse bg-[#0d9488]" />
      )}
    </span>
  );
};
