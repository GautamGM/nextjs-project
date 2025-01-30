"use client"
import React, { useState, useRef, ReactNode } from 'react';

const GradientButton = ({ 
  onClick, 
  children = "Explore" ,
  className
}: { 
  onClick: () => void, 
  children: ReactNode | string,
  className:string 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGradientPosition({ x, y });
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`relative group px-8 py-3 rounded-lg uppercase tracking-widest font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 bg-[conic-gradient(from_var(--angle),transparent_20%,#c5a47e_40%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            animation: 'border-spin 3s linear infinite',
            WebkitAnimation: 'border-spin 3s linear infinite'
          }}
        />
        <div className="absolute inset-[1px] rounded-lg bg-slate-900" />
      </div>

      {/* Main gradient background */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
            rgba(197, 164, 126, 1) 0%, 
            rgba(176, 143, 105, 1) 100%)`,
          opacity: '0.9'
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 text-black flex items-center gap-2">
        {children}
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </span>
    </button>
  );
};

export default GradientButton;