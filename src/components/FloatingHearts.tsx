import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          size: Math.random() * 0.5 + 0.5,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
            top: '100%',
            animation: `float 6s ease-in-out infinite ${heart.delay}s, rise 12s linear infinite ${heart.delay}s`,
          }}
        >
          💕
        </div>
      ))}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50vh) translateX(20px); }
          100% { transform: translateY(-100vh) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};