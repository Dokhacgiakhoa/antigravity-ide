import React from 'react';

/**
 * Formula A: Liquid Glass Card
 * 
 * Usage:
 * <LiquidCard>
 *   <h2>Glass Ethereal</h2>
 *   <p>Content floats on a blurred surface.</p>
 * </LiquidCard>
 */
export const LiquidCard = ({ children, className = '' }) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl
      bg-white/10 dark:bg-black/20
      backdrop-blur-xl backdrop-saturate-150
      border border-white/20 dark:border-white/10
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      p-6 transition-all duration-300 hover:scale-[1.02]
      ${className}
    `}>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Content */}
      <div className="relative z-10 text-slate-800 dark:text-slate-100">
        {children}
      </div>
    </div>
  );
};
