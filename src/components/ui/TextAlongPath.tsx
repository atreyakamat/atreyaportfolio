import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TextAlongPathProps {
  text?: string;
  className?: string;
}

export const TextAlongPath: React.FC<TextAlongPathProps> = ({
  text = "LET'S BUILD USEFUL PRODUCTS TOGETHER • GET IN TOUCH WITH ATREYA KAMAT • ",
  className = '',
}) => {
  const reducedMotion = useReducedMotion();
  const repeatedText = `${text} ${text} ${text}`;

  return (
    <div className={`relative w-full overflow-hidden py-4 select-none ${className}`}>
      <svg viewBox="0 0 1000 200" className="w-full h-auto max-h-[180px]">
        <path
          id="contact-curve-path"
          d="M 50,150 Q 250,30 500,100 T 950,50"
          fill="none"
          stroke="transparent"
        />
        <text className="font-serif text-[22px] font-bold uppercase tracking-[0.25em] fill-[#151515]">
          <textPath href="#contact-curve-path" startOffset="0%">
            {reducedMotion ? (
              text
            ) : (
              <animate
                attributeName="startOffset"
                from="0%"
                to="-100%"
                dur="24s"
                repeatCount="indefinite"
              />
            )}
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};
