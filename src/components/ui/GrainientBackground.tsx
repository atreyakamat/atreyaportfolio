import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface GrainientBackgroundProps {
  className?: string;
}

export const GrainientBackground: React.FC<GrainientBackgroundProps> = ({ className = '' }) => {
  const reducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.005;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Base Porcelain surface
      ctx.fillStyle = '#F7F5EF';
      ctx.fillRect(0, 0, w, h);

      // Soft Aqua Atmospheric Orbs with subtle fluid motion
      const x1 = w * 0.25 + Math.sin(time * 0.8) * (w * 0.08);
      const y1 = h * 0.35 + Math.cos(time * 0.6) * (h * 0.08);
      const r1 = Math.min(w, h) * 0.45;

      const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
      grad1.addColorStop(0, 'rgba(50, 214, 197, 0.22)');
      grad1.addColorStop(0.5, 'rgba(217, 250, 245, 0.12)');
      grad1.addColorStop(1, 'rgba(247, 245, 239, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      const x2 = w * 0.75 + Math.cos(time * 0.7) * (w * 0.07);
      const y2 = h * 0.65 + Math.sin(time * 0.9) * (h * 0.07);
      const r2 = Math.min(w, h) * 0.5;

      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
      grad2.addColorStop(0, 'rgba(8, 127, 120, 0.12)');
      grad2.addColorStop(0.6, 'rgba(217, 250, 245, 0.08)');
      grad2.addColorStop(1, 'rgba(247, 245, 239, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Subtle Vermilion warmth tint
      const x3 = w * 0.5 + Math.sin(time * 0.5) * (w * 0.1);
      const y3 = h * 0.15 + Math.cos(time * 0.4) * (h * 0.05);
      const r3 = Math.min(w, h) * 0.35;

      const grad3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, r3);
      grad3.addColorStop(0, 'rgba(240, 90, 60, 0.04)');
      grad3.addColorStop(1, 'rgba(247, 245, 239, 0)');

      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, w, h);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {reducedMotion ? (
        <div
          className="absolute inset-0 bg-[#F7F5EF]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 35%, rgba(50, 214, 197, 0.20), transparent 50%),
              radial-gradient(circle at 75% 65%, rgba(8, 127, 120, 0.12), transparent 50%),
              radial-gradient(circle at 50% 15%, rgba(240, 90, 60, 0.04), transparent 40%)
            `,
          }}
        />
      ) : (
        <canvas ref={canvasRef} className="h-full w-full object-cover" />
      )}
      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
