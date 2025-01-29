"use client"
import React, { useState, useRef } from 'react';
const GradientButton = ({onClick}:{onClick:(id: number)=>void}) => {
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
      className="relative w-[120px] h-[40px] rounded-md mt-1 overflow-hidden"
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(192, 132, 252, 1), rgba(236, 72, 153, 1))`,
      }}
    >
      <span className="relative z-10 text-white">Click here</span>
    </button>
  );
};

export default GradientButton;