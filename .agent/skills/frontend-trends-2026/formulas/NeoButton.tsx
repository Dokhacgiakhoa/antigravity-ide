import React from 'react';

/**
 * Formula B: Neo-Brutalist Button
 * 
 * Usage:
 * <NeoButton>Click Me</NeoButton>
 */
export const NeoButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 font-bold text-lg
        bg-yellow-400 text-black
        border-2 border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
        hover:bg-yellow-300
        rounded-none
        ${className}
      `}
    >
      {children}
    </button>
  );
};
