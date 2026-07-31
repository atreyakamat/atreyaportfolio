import React from 'react';

interface BacklightProps {
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}

export const Backlight: React.FC<BacklightProps> = ({
  children,
  color = 'rgba(50, 214, 197, 0.35)',
  intensity = 40,
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Soft atmospheric ambient glow backplate */}
      <div
        className="absolute -inset-3 rounded-[2.5rem] opacity-75 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
          filter: `blur(${intensity}px)`,
        }}
      />
      {/* Image container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
