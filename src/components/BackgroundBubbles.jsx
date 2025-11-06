import React from 'react';
import './BackgroundBubbles.css';

const BackgroundBubbles = () => {
  // Generate random bubble properties
  const bubbles = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    size: Math.random() * 80 + 20, // Random size between 20-100px
    left: Math.random() * 100, // Random horizontal position (0-100%)
    animationDuration: Math.random() * 15 + 10, // Random duration between 10-25s
    animationDelay: Math.random() * 5, // Random delay between 0-5s
    opacity: Math.random() * 0.4 + 0.1, // Random opacity between 0.1-0.5
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble absolute rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            opacity: bubble.opacity,
            animationDuration: `${bubble.animationDuration}s`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        />
      ))}
      
      {/* Additional decorative bubbles with different blue shades */}
      {Array.from({ length: 8 }, (_, index) => {
        const blueColors = [
          'from-blue-300/20 to-blue-500/20',
          'from-sky-400/20 to-sky-600/20',
          'from-indigo-400/20 to-indigo-600/20',
          'from-cyan-400/20 to-cyan-600/20',
        ];
        return (
          <div
            key={`accent-${index}`}
            className={`accent-bubble absolute rounded-full bg-gradient-to-br ${blueColors[index % 4]}`}
            style={{
              width: `${Math.random() * 60 + 15}px`,
              height: `${Math.random() * 60 + 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundBubbles;
